import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService,
              private sessionStorage: SessionStorageService) {
  }

  // Проверка на авторизацию
  public checkAuth() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/check-auth', '')
        .then((result: string) => {
            if (result !== '') {
              this.sessionStorage.pubId = result;
            }

            resolve();
          },
          (error) => {
            console.log('Ошибка при проверке на авторизацию', error);
            reject();
          }
        );
    });
  }
}
