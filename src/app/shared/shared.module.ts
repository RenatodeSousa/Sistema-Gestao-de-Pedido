import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { FormFieldErrorComponent } from './components/form-field-error/form-field-error.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import {NgxMaskModule} from 'ngx-mask';
import { MaterialModule } from '../core/components/material/material-module';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';
import { ModalEditInsertComponent } from '../pages/vendedor/modal-edit-insert/modal-edit-insert.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BaseEnderecoFormComponent } from './components/base-endereco-Form/base-endereco-form.component';
import { MaterialFileUploadComponent } from './components/material-file-upload/material-file-upload.component';








@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot()
  ],
  declarations: [
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    ModalConfirmationComponent,
    ServerErrorMessagesComponent,
    ModalEditInsertComponent,
    BaseEnderecoFormComponent,
    MaterialFileUploadComponent,
   



  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BreadCrumbComponent,
    PageHeaderComponent,
    FormFieldErrorComponent,
    MaterialModule,
    NgxMaskModule,
    ModalConfirmationComponent,
    ServerErrorMessagesComponent,
    ModalEditInsertComponent,
    BaseEnderecoFormComponent,
    MaterialFileUploadComponent,

  ]
})
export class SharedModule {
}
