import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProdutoListComponent} from './produto-list/produto-list.component';
import {ProdutoFormComponent} from './produto-form/produto-form.component';
import {ProdutoResolver} from "./shared/resolvers/produto-resolver.guard";


const routes: Routes = [
  {
    path: '',
    component: ProdutoListComponent
  },
  {
    path: 'new',
    component: ProdutoFormComponent
  },
  {
    path: ':id/edit',
    component: ProdutoFormComponent,
    resolve: {
      resource: ProdutoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
