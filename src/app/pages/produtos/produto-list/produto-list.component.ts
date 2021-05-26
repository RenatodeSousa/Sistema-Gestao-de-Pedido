import { Component, OnInit } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';

import { ProdutoService } from '../shared/service/produto.service';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import {Produto} from "../shared/model/produto.model";

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent extends BaseResourceListComponent<Produto> {

  columns = [
    { columnDef: 'id', header: 'ID', cell: (element: any) => `${element.id}` },
    { columnDef: 'nome', header: 'Nome', cell: (element: any) => `${element.nome}` },
    { columnDef: 'descricao', header: 'Descrição', cell: (element: any) => `${element.descricao}` },
    { columnDef: 'categoria', header: 'Categoria', cell: (element: any) => `${element.categoria.nome}` },
    { columnDef: 'acao', header: 'Ações' },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(protected produtoService: ProdutoService, protected alertService: AlertModalService, public dialog: MatDialog) {
    super(produtoService, alertService);
    this.componentName = 'Produtos';
  }

  ngOnInit() {
    this.load();

  }


  openDialog(row) {
    const dialogRef = this.dialog.open(ModalConfirmationComponent, {
        width: '400px',
        data: row
      });


    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
      this.deleteResource(row);
      }
    });
  }
}
