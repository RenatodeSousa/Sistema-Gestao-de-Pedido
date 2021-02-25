import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { Categoria } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseResourceService<Categoria> {

  constructor(protected injector: Injector) {
    super(`${API_CONFIG.baseUrl}/categorias`, injector, Categoria.fromJson);
  }

}
