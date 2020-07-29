import { Injectable, Injector, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/core/config/api.config';

import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { User } from '../user.model';




@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseResourceService<User>  {
  constructor(protected injector: Injector) {
    super(`${API_CONFIG.baseUrl}/login`, injector, User.fromJson);
  }

}
