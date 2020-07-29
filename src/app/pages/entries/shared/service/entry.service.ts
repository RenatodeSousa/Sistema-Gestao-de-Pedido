import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, flatMap, map } from 'rxjs/operators';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { Entry } from '../model/entry.model';
import * as moment from 'moment';
import { CategoriaService } from 'src/app/pages/categorias/shared/service/categoria.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService extends BaseResourceService<Entry> {

  constructor(protected injector: Injector,
    private categoriaService: CategoriaService) {
    super('api/entries', injector, Entry.fromJson);
  }

  create(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.create.bind(this));
  }

  update(entry: Entry): Observable<Entry> {
    return this.setCategoryAndSendToServer(entry, super.update.bind(this));
  }

  getByMonthAndYear(month: number, year: number): Observable<Entry[]> {
    return this.getAll().pipe(
      map(entries => this.filterByMonthAndYear(entries, month, year))
    );
  }

  private filterByMonthAndYear(entries: Entry[], month: number, year: number) {
    return entries.filter(entry => {
      const entryDate = moment(entry.date, 'DD/MM/YYYY');
      const monthMatches = entryDate.month() + 1 === +month;
      const yearMatches = entryDate.year() === +year;

      if (monthMatches && yearMatches) { return entry; }
    });
  }

  private setCategoryAndSendToServer(entry: Entry, sendFn: any): Observable<Entry> {
    return this.categoriaService.getById(entry.categoriaId).pipe(
      flatMap(categoria => {
        entry.categoria = categoria;
        return sendFn(entry);
      }),
      catchError(this.handleError)
    );
  }

}
