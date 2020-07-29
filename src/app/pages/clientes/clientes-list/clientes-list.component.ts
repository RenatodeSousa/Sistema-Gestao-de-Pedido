import { Component} from '@angular/core';
import { Cliente } from '../shared/model/cliente.model';
import { ClienteService } from '../shared/service/cliente.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { ModalConfirmationComponent } from 'src/app/shared/components/modal-confirmation/modal-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { ClientesModalEditCreateComponent } from '../clientes-modal-edit-create/clientes-modal-edit-create.component';


@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent extends BaseResourceListComponent<Cliente> {

  private cliente = new Cliente();

  // displayedColumns = this.columns.map(c => c.columnDef);

   constructor(protected clienteService: ClienteService,
     protected alertService: AlertModalService, public dialog: MatDialog) {
     super(clienteService, alertService);
     this.componentName = 'Clientes';
     this.displayedColumns = ['id', 'nome', 'email', 'statusCliente', 'telefone', 'acao'];
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
     if (element !== undefined) {
      console.log('editando');
      this.clienteService.getById(element.id).subscribe(response => {
        this.cliente = response;
        console.log('voltou ' + response);
          },
          error => {
            console.log('deu ruim ');
          });



    //   this.cliente = element;
     } else {
       console.log('estado do cliente' + this.cliente);
       console.log('cadastro');
     }

 }


 openDialogEditCreate(row) {
  const dialogRef = this.dialog.open(ClientesModalEditCreateComponent, {
      data: row

    });

  dialogRef.afterClosed().subscribe(result => {
    if (result === true) {
    this.load();
    this.alertService.showAlertSuccess('Cliente adicionado/editado com sucesso');
    }
  });
}

}
