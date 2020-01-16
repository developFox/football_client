import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Router} from '@angular/router';
import {SessionStorageService} from '../storage/session-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

  // выкидываем на главную если не авторизован
  canActivate() {
    this.sessionStorage.getAuthenticatedStatic().then((data) => {
        if (data !== true) {
          this.router.navigate(['/']);
        }
      },
      (error) => {
        console.log('Ошибка при получении авторизации клиента: ', error);
      });
    return true;
  }

  constructor(private router: Router,
              private sessionStorage: SessionStorageService) {
  }
}
