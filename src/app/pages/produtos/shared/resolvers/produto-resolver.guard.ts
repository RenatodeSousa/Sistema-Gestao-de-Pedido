import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Produto} from '../model/produto.model';
import {ProdutoService} from '../service/produto.service';


@Injectable({
  providedIn: 'root'
})
export class ProdutoResolver implements Resolve<Produto> {

  constructor(private produtoService: ProdutoService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Produto> | Promise<Produto> | Produto {
    if (route.params && route.params['id']) {
      return this.produtoService.getById(route.params['id']);
    }

    return null;
  }

}
