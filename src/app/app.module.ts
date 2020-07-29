import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './pages/login/login.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

