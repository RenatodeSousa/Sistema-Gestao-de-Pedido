import { Injectable } from '@angular/core';
import { LocalUser } from './local_user';
import { STORAGE_KEYS } from './storage_keys.config';

@Injectable()
export class StorageService {

    getLocalUser(): LocalUser {
        const usr = localStorage.getItem(STORAGE_KEYS.localUser);
        if (usr == null) {
            return null;
        }
            return JSON.parse(usr);

    }

    setLocalUser(obj: LocalUser) {
        if (obj == null) {
            localStorage.removeItem(STORAGE_KEYS.localUser);
        }
        localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }

}
