import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Vendedor } from '../vendedor.model';
import { VendedorService } from '../service/vendedor.service';
import { StorageService } from 'src/app/core/config/storage.service';


@Injectable({
  providedIn: 'root'
})
export class VendedorResolver implements Resolve<Vendedor> {

  constructor(private vendedorService: VendedorService, private storage: StorageService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Vendedor> | Promise<Vendedor> | Vendedor {
    const localUser = this.storage.getLocalUser();
    console.log('esta no resolver');
    if (route.params && route.params['id']) {
      return this.vendedorService.getById(route.params['id']);
    }

    if (localUser && localUser.email && route.routeConfig.path === 'profile') {

      return this.vendedorService.findByEmail(localUser.email);
    }
    return null;
  }

}
