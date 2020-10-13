import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {UserStorageService} from '../../storage/user-storage.service';
import {GlobalParamsAuth} from './global-params-auth';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  phone = {val: '', error: false};
  password = {val: '', error: false};
  smsCode = {val: '', error: false};
  email = {val: '', error: false};

  state = 1;

  // окно сброса пароля
  showForgot = false;

  // окно успешного сброса пароля
  showForgotSuccess = false;

  constructor(private authService: AuthService,
              private userStorageService: UserStorageService,
              public globalParamsAuth: GlobalParamsAuth) {
  }

  auth() {
    if (this.state === 1) {
      if (this.phone.val === '') {
        this.phone.error = true;
        return false;
      } else {
        this.phone.error = false;
      }

      if (this.password.val === '') {
        this.password.error = true;
        return false;
      } else {
        this.password.error = false;
      }
    } else {
      if (this.smsCode.val === '') {
        this.smsCode.error = true;
        return false;
      } else {
        this.smsCode.error = false;
      }
    }

    this.authService.auth(this.phone.val, this.password.val, this.smsCode.val).then((result: InterFaceAuthResult) => {
        this.phone = {val: '', error: false};
        this.password = {val: '', error: false};
        this.smsCode = {val: '', error: false};

        if (result.code === 'restart') {
          this.authService.clear();
        } else if (result.code === 'ok' && this.state === 1) {
          this.state = 2;
        } else if (result.code === 'ok' && this.state === 2) {
          this.userStorageService.user = result.data;
          this.globalParamsAuth.showLogin = false;
        }
      },
      () => {
        console.log('Ошибка при авторизации');
      });
  }

  sendForgot() {
    if (this.email.val === '') {
      this.email.error = true;
      return false;
    } else {
      this.email.error = false;
    }

    this.authService.forgot(this.email.val).then(() => {
        this.showForgot = false;
        this.showForgotSuccess = true;
        this.email.val = '';
        this.email.error = false;
      },
      () => {
        console.log('Ошибка при авторизации');
      });
  }

  showForgotChange() {
    this.globalParamsAuth.showLogin = false;
    this.showForgot = true;
  }
}
