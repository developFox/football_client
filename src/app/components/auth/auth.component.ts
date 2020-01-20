import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  phone = '';
  password = '';
  smsCode = '';
  state = 1;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {

  }

  auth() {
    this.authService.auth(this.phone, this.password, this.smsCode).then((result: { code: string }) => {
        if (result.code === 'restart') {
          this.router.navigate(['/']);
        } else if (result.code === 'ok') {
          console.log('Авторизация прошла');
        }

        this.state = 2;
        this.phone = '';
        this.password = '';
        this.smsCode = '';
      },
      () => {
        console.log('Ошибка при авторизации');
      });
  }
}
