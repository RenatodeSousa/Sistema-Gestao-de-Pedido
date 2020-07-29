import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { VendedorRoutingModule } from './vendedor-routing.module';
import { VendedorFormComponent } from './vendedor-form/VendedorFormComponent';
import { VendedorListComponent } from './vendedor-list/vendedor-list.component';
import { BaseEnderecoFormComponent } from 'src/app/shared/components/base-endereco-Form/base-endereco-form.component';







@NgModule({
  imports: [
    VendedorRoutingModule,
    SharedModule,

  ],
  declarations: [VendedorFormComponent, VendedorListComponent],
  providers: [ BaseEnderecoFormComponent],
})
export class VendedorModule { }
