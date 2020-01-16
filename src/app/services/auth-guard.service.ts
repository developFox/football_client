import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Router} from '@angular/router';
import {SessionStorageService} from '../storage/session-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate() {
    this.sessionStorage.getAuthenticatedStatic().then((data) => {
        if (data !== true) {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log('Ошибка при получении авторизации клиента: ', error);
      });

    console.log('AuthGuard#canActivate called');
    return true;
  }

  constructor(private router: Router,
              private sessionStorage: SessionStorageService) {
  }
}
