import { NgModule } from '@angular/core';
import { IMaskModule } from 'angular-imask';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from 'src/app/shared/shared.module';
import { EntriesRoutingModule } from './entries-routing.module';
import { EntryFormComponent } from './entry-form/entry-form.component';
import { EntryListComponent } from './entry-list/entry-list.component';



@NgModule({
  imports: [
    EntriesRoutingModule,
    SharedModule,
    CalendarModule,
    IMaskModule
  ],
  declarations: [
    EntryListComponent,
    EntryFormComponent
  ]
})
export class EntriesModule { }
