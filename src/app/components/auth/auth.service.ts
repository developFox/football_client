import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {
  }

  // Проверка на авторизацию
  public checkAuth() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/check-auth', '')
        .then(() => {
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
