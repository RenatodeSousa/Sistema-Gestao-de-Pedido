import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendedorListComponent } from './vendedor-list/vendedor-list.component';
import { VendedorFormComponent } from "./vendedor-form/VendedorFormComponent";
import { VendedorResolver } from './shared/resolvers/vendedor-resolver.guard';





const routes: Routes = [
  {
    path: '',
    component: VendedorListComponent
  },
  {
    path: 'new',
    component: VendedorFormComponent
  },
  {
    path: ':id/edit',
    component: VendedorFormComponent,
    resolve: {
      resource: VendedorResolver
    }
  },
  {
    path: 'profile',
    component: VendedorFormComponent,
    resolve: {
      resource: VendedorResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
