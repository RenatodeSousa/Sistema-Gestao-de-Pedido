import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable} from 'rxjs';
import { Categoria } from '../model/categoria.model';
import { CategoriaService } from '../service/categoria.service';


@Injectable({
  providedIn: 'root'
})
export class CategoriaResolver implements Resolve<Categoria> {

  constructor(private categoriaService: CategoriaService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Categoria> | Promise<Categoria> | Categoria {
    if (route.params && route.params['id']) {
      return this.categoriaService.getById(route.params['id']);
    }

    return null;
  }

}
