import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { ConfirmModalComponent } from '../shared/components/confirm-modal/confirm-modal.component';
import { HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './config/storage.service';
import { AuthInterceptorProvider } from './config/interceptors/auth-interceptor';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { BaseEnderecoFormComponent } from '../shared/components/base-endereco-Form/base-endereco-form.component';
import { ImageUtilService } from '../shared/components/material-file-upload/image-util.service';









@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
   // NgxMaskModule.forRoot(),
   // HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-full-width',
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: 'increasing'
    }),
    ModalModule.forRoot()
  ],
  declarations: [
    ConfirmModalComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,

  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FooterComponent,
    HeaderComponent,
    NavComponent,
  ],
  entryComponents: [
    ConfirmModalComponent,

  ],
  providers: [AuthInterceptorProvider, StorageService, BaseEnderecoFormComponent, ImageUtilService ],
})

export class CoreModule { }
