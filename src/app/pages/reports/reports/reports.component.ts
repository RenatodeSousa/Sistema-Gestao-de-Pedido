import { EntryService } from '../../entries/shared/service/entry.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Categoria } from '../../categorias/shared/model/categoria.model';
import { Entry } from '../../entries/shared/model/entry.model';
import toastr from 'toastr';
import { BaseToastr } from 'src/app/shared/models/base-toastr.model';
import currencyFormatter from 'currency-formatter';
import { CategoriaService } from '../../categorias/shared/service/categoria.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public expenseTotal: any = 0;
  public revenueTotal: any = 0;
  public balance: any = 0;

  public expenseChartData: any;
  public revenueChartData: any;

  public chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  public categorias: Categoria[] = [];
  public entries: Entry[] = [];

  @ViewChild('month') month: ElementRef = null;
  @ViewChild('year') year: ElementRef = null;

  constructor(private entryService: EntryService,
              private categoriaService: CategoriaService) { }

  public ngOnInit() {
    this.categoriaService.getAll().subscribe(categorias => this.categorias = categorias);
  }

  public generateReports() {
    const month = this.month.nativeElement.value;
    const year = this.year.nativeElement.value;

    if (!month || !year) {
      BaseToastr.configuration();
      toastr.warning('Você precisa selecionar o Mês e o Ano para gerar os relatórios');
    } else {
      this.entryService.getByMonthAndYear(month, year).subscribe(this.setValues.bind(this));
    }
  }

  private setValues(entries: Entry[]) {
    this.entries = entries;
    this.calculateBalance();
    this.setChartData();
  }

  private calculateBalance() {
    let expenseTotal = 0;
    let revenueTotal = 0;

    this.entries.forEach(entry => {
      if (entry.type === 'revenue') {
        revenueTotal += currencyFormatter.unformat(entry.amount, { code: 'BRL' });
      } else {
        expenseTotal += currencyFormatter.unformat(entry.amount, { code: 'BRL' });
      }
    });

    this.revenueTotal = currencyFormatter.format(revenueTotal, { code: 'BRL' });
    this.expenseTotal = currencyFormatter.format(expenseTotal, { code: 'BRL' });
    this.balance = currencyFormatter.format(revenueTotal - expenseTotal, { code: 'BRL' });
  }

  private setChartData() {
    this.revenueChartData = this.getChartData('revenue', 'Gráfico de Receitas', '#9CCC65');
    this.expenseChartData = this.getChartData('expense', 'Gráfico de Despesas', '#e03131');
  }

  private getChartData(entryType: string, title: string, color: string) {
    const chartData = [];
    this.categorias.forEach(categoria => {
      // filtering entries by category and type
      const filteredEntries = this.entries.filter(
        entry => (entry.categoriaId === categoria.id) && (entry.type === entryType)
      );

      // if found entries equal, then sum entries amount and add to chartData
      if (filteredEntries.length > 0) {
        const totalAmount = filteredEntries.reduce(
          (total, entry) => total + currencyFormatter.unformat(entry.amount, { code: 'BRL' }), 0
        );

        chartData.push({
          categoriaNome: categoria.nome,
          totalAmount: totalAmount
        });
      }
    });

    return {
      labels: chartData.map(item => item.categoriaNome),
      datasets: [{
        label: title,
        backgroundColor: color,
        data: chartData.map(item => item.totalAmount)
      }]
    };
  }

}
