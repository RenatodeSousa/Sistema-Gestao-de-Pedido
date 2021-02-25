import { Component, OnInit } from '@angular/core';

import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { Categoria } from '../shared/model/categoria.model';
import { CategoriaService } from '../shared/service/categoria.service';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.css']
})
export class CategoriaListComponent extends BaseResourceListComponent<Categoria> {

  columns = [
    { columnDef: 'id', header: 'ID', cell: (element: any) => `${element.id}` },
    { columnDef: 'nome', header: 'Nome', cell: (element: any) => `${element.nome}` },
    { columnDef: 'descricao', header: 'Descrição', cell: (element: any) => `${element.email}` },
    { columnDef: 'acao', header: 'Ações' },
  ];

  displayedColumns = this.columns.map(c => c.columnDef);


  constructor(protected categoriaService: CategoriaService, protected alertService: AlertModalService, public dialog: MatDialog) {
    super(categoriaService, alertService);
    this.componentName = 'Categorias';
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
