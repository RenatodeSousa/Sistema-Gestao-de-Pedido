import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { Cliente } from '../model/cliente.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseResourceService<Cliente> {

  constructor(protected injector: Injector) {
    super(`${API_CONFIG.baseUrl}/clientes`, injector, Cliente.fromJson);
  }

}
