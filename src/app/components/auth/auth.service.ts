import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';
import {SessionStorageService} from '../../storage/session-storage.service';
import {Router} from '@angular/router';
import {UserStorageService} from '../../storage/user-storage.service';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService,
              private sessionStorage: SessionStorageService,
              private userStorageService: UserStorageService,
              private router: Router) {
  }

  // Проверка на авторизацию
  public checkAuth() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/check-auth', {session_id: this.sessionStorage.pubId})
        .then((result: InterFaceAuthResult) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при проверке на авторизацию', error);
            reject();
          }
        );
    });
  }

  // авторизация (логин,пароль)
  public auth(phone, password, smsCode) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-auth', {
        phone: phone,
        password: password,
        sms_code: smsCode,
        session_id: this.sessionStorage.pubId
      })
        .then((result: { code: string }) => {
            resolve(result);
          },
          () => {
            console.log('Ошибка при авторизации');
            reject();
          }
        );
    });
  }

  // сброс пароля
  public forgot(email) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-forgot', {
        email: email,
      })
        .then((result: { code: string }) => {
            resolve(result);
          },
          () => {
            console.log('Ошибка при сбросе пароля');
            reject();
          }
        );
    });
  }

  clear() {
    localStorage.removeItem('pubId');
    this.sessionStorage.authenticated.emit(false);
    this.userStorageService.userData = {fio: '', type_id: null, type_name: ''};
    this.router.navigate(['/']);
  }

  // выход
  public exit() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/exit', {})
        .then((result: { code: string }) => {
            resolve(result);
          },
          () => {
            console.log('Ошибка при авторизации');
            reject();
          }
        );

      localStorage.removeItem('pubId');
      this.sessionStorage.authenticated.emit(false);
      this.userStorageService.userData = {fio: '', type_id: null, type_name: ''};
      this.router.navigate(['/']);
    });
  }
}
