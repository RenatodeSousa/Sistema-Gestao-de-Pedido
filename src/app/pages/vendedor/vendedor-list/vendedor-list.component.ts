import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { MatDialog } from '@angular/material/dialog';
import { Vendedor } from '../shared/vendedor.model';
import { VendedorService } from '../shared/service/vendedor.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';




@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent extends BaseResourceListComponent<Vendedor> {


  vendedor = new Vendedor();


  constructor(protected vendedorService: VendedorService, public dialog: MatDialog, protected alertService: AlertModalService) {
    super(vendedorService, alertService);
    this.componentName = 'Vendedores';
    this.displayedColumns = ['id', 'nome', 'email', 'status', 'telefone', 'acao'];
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


  editCreate(element) {
     let title = '';
    if (!element.isUndefined) {
      title = 'Editar';
      this.vendedor = element;
    } else {

      title = 'Cadastrar';
    }

}

}
