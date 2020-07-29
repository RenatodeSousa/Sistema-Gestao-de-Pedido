import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesModalEditCreateComponent } from './clientes-modal-edit-create/clientes-modal-edit-create.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClienteResolver } from './shared/resolvers/cliente-resolver.guard';


const routes: Routes = [
  {
    path: '',
    component: ClientesListComponent
  },
  {
    path: 'new',
    component: ClientesModalEditCreateComponent
  },
  {
    path: ':id/edit',
    component: ClientesModalEditCreateComponent,
    resolve: {
      resource: ClienteResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
