import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { API_CONFIG } from 'src/app/core/config/api.config';
import { Endereco } from '../model/endereco.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EnderecoService extends BaseResourceService<Endereco> {

  constructor(protected injector: Injector) {
    super(`${API_CONFIG.baseUrl}`, injector, Endereco.fromJson);
  }

  findByCep(CEP: string): Observable<Endereco>  {
    return this.http.get<Endereco>(`${API_CONFIG.baseUrl}/estados/${CEP}`);
}

}
