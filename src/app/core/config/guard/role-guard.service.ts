import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from '../storage.service';
import { AuthService } from '../services/auth.service';


@Injectable()
export class RoleGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, public storage: StorageService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {


    const expectedRole = route.data.expectedRole;

    const localUser = this.storage.getLocalUser();
    if (localUser == null) {
      return false;

    }
    return true;
  }

}
