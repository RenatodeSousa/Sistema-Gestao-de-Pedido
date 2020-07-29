import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { Vendedor } from '../vendedor.model';


@Injectable({
  providedIn: 'root'
})
export class VendedorService extends BaseResourceService<Vendedor> {


  constructor(protected injector: Injector) {
    super(`${API_CONFIG.baseUrl}/vendedores`, injector, Vendedor.fromJson);
  }


}
