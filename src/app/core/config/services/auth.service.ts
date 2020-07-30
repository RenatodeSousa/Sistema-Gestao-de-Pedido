
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { StorageService } from '../storage.service';
import { User } from 'src/app/pages/login/shared/user.model';
import { API_CONFIG } from '../api.config';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUser } from '../local_user';




@Injectable()
export class AuthService {

    public jwtHelper: JwtHelperService = new JwtHelperService();

    constructor(
        public http: HttpClient,
        public storage: StorageService,

    ) {
    }



    authenticate(creds: User) {
             return this.http.post(
            `${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });

    }

    refreshToken() {
        return this.http.post(
            `${API_CONFIG.baseUrl}/auth/refresh_token`,
            {},
            {
                observe: 'response',
                responseType: 'text'
            });
    }


    successfulLogin(authorizationValue: string) {
        const tok = authorizationValue.substring(7);

        const user: LocalUser = {
            token: tok,
            email: this.jwtHelper.decodeToken(tok).sub,
            role: this.jwtHelper.decodeToken(tok).auth[0].authority

        };


        if (this.jwtHelper.decodeToken(tok).auth.length > 0 && user.role === 'undefined') {

            user.role = this.jwtHelper.decodeToken(tok).auth[1].authority;
        }


        this.storage.setLocalUser(user);
      //  this.cartService.createOrClearCart();
    }


    logout() {
        return this.storage.setLocalUser(null);
    }

    public isAuthenticated(): boolean {
        const localUser = this.storage.getLocalUser();
        if (localUser == null) {
            return false;
        }
        return !this.jwtHelper.isTokenExpired(localUser.token);
    }
}
