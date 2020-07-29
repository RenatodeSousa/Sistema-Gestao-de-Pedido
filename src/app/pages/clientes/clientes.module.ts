import { NgModule } from '@angular/core';

import { ClientesModalEditCreateComponent } from './clientes-modal-edit-create/clientes-modal-edit-create.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ClientesModalEditCreateComponent, ClientesListComponent],
  imports: [
    ClientesRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }
