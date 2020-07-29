import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Entry } from '../model/entry.model';
import { EntryService } from '../service/entry.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryResolver implements Resolve<Entry> {

  constructor(private entryService: EntryService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Entry> | Promise<Entry> | Entry {
    if (route.params && route.params['id']) {
      return this.entryService.getById(route.params['id']);
    }

    return null;
  }

}
