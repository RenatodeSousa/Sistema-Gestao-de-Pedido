import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable} from 'rxjs';
import { Cliente } from '../model/cliente.model';
import { ClienteService } from '../service/cliente.service';



@Injectable({
  providedIn: 'root'
})
export class ClienteResolver implements Resolve<Cliente> {

  constructor(private categoriaService: ClienteService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Cliente> | Promise<Cliente> | Cliente {
    if (route.params && route.params['id']) {
      return this.categoriaService.getById(route.params['id']);
    }

    return null;
  }

}
