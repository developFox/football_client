import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {UserStorageService} from '../../storage/user-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  phone = '';
  password = '';
  smsCode = '';
  state = 1;

  constructor(private authService: AuthService,
              private userStorageService: UserStorageService,
              private router: Router) {
  }

  auth() {
    this.authService.auth(this.phone, this.password, this.smsCode).then((result: InterFaceAuthResult) => {
        this.phone = '';
        this.password = '';
        this.smsCode = '';

        if (result.code === 'restart') {
          this.router.navigate(['/']);
        } else if (result.code === 'ok' && this.state === 1) {
          this.state = 2;
        } else if (result.code === 'ok' && this.state === 2) {
          this.userStorageService.userData = result.data;
          console.log('Авторизация прошла', result.data);
        }
      },
      () => {
        console.log('Ошибка при авторизации');
      });
  }
}
