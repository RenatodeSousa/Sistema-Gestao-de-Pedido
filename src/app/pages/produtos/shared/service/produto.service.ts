import {Injectable, Injector} from '@angular/core';
import {BaseResourceService} from 'src/app/shared/services/base-resource.service';
import {API_CONFIG} from 'src/app/core/config/api.config';
import {Produto} from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseResourceService<Produto> {

  constructor(protected injector: Injector) {
    super(`${API_CONFIG.baseUrl}/produtos`, injector, Produto.fromJson);
  }

}
