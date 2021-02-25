import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';





@NgModule({
  imports: [
    ProdutosRoutingModule,
    SharedModule
  ],
  declarations: [
    ProdutoListComponent,
    ProdutoFormComponent
  ]
})
export class ProdutosModule { }
