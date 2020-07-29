import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriaResolver } from './shared/resolvers/categoria-resolver.guard';


const routes: Routes = [
  {
    path: '',
    component: CategoriaListComponent
  },
  {
    path: 'new',
    component: CategoriaFormComponent
  },
  {
    path: ':id/edit',
    component: CategoriaFormComponent,
    resolve: {
      resource: CategoriaResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
