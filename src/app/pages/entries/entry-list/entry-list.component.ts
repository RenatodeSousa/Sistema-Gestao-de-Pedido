import { Component } from '@angular/core';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';
import { Entry } from '../shared/model/entry.model';
import { EntryService } from '../shared/service/entry.service';
import { AlertModalService } from 'src/app/shared/services/alert-modal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent extends BaseResourceListComponent<Entry> {

  public types = { revenue: 'revenue', expense: 'expense' };

  constructor(protected entryService: EntryService, protected alertService: AlertModalService) {
    super(entryService, alertService);
    this.componentName = 'Lançamentos';
  }

}
