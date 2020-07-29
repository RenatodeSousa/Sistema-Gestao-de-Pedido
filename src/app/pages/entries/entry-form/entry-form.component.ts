import { Component, Injector, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';
import { Entry } from '../shared/model/entry.model';
import { EntryService } from '../shared/service/entry.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Categoria } from '../../categorias/shared/model/categoria.model';
import { CategoriaService } from '../../categorias/shared/service/categoria.service';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css']
})
export class EntryFormComponent extends BaseResourceFormComponent<Entry> implements OnInit {

  public categorias: Array<Categoria> = new Array<Categoria>();

  public imaskConfig = {
    mask: Number,
    scale: 2,
    thousandsSeparator: '',
    padFractionalZeros: true,
    normalizeZeros: true,
    radix: ','
  };

  public ptBR = {
    firstDayOfWeek: 0,
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    monthNames: [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    today: 'Hoje',
    clear: 'Limpar'
  };

  constructor(protected entryService: EntryService,
              protected categoriaService: CategoriaService,
              protected injector: Injector,
              protected alertService: AlertModalService) {
    super(injector, new Entry(), entryService, Entry.fromJson, alertService);
  }

  public ngOnInit(): void {
    this.loadCategorias();
    super.ngOnInit();
  }

  get typeOptions(): Array<any> {
    return Object.entries(Entry.types).map(
      ([key, value]) => {
        return {
          text: value,
          value: key
        };
      }
    );
  }

  protected buildResourceForm(): void {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      description: [null],
      type: ['expense', Validators.compose([Validators.required])],
      amount: [null, Validators.compose([Validators.required])],
      date: [null, Validators.compose([Validators.required])],
      paid: [true, Validators.compose([Validators.required])],
      categoriaId: [null, Validators.compose([Validators.required])],
    });
  }

  private loadCategorias() {
    this.categoriaService.getAll().subscribe(
      categorias => this.categorias = categorias
    );
  }

  protected creationPageTitle(): string {
    return 'Cadastro de Novo Lançamento';
  }

  protected editionPageTitle(): string {
    const entryName = this.resource.name || '';
    return `Editando Lançamento: ${entryName}`;
  }

}
