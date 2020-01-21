import {Component, OnInit} from '@angular/core';
import {AuthService} from './components/auth/auth.service';
import {HttpService} from './utils/http.service';
import {SessionStorageService} from './storage/session-storage.service';
import {Router} from '@angular/router';
import {UserStorageService} from './storage/user-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private userStorageService: UserStorageService) {

  }

  ngOnInit() {
    this.authService.checkAuth().then((result: InterFaceAuthResult) => {
        if (result.code === 'ok') {
          this.userStorageService.userData = result.data;
        }
        if (result.code === 'exit') {
          this.authService.clear();
        }
      },
      (error) => {
        console.log('Ошибка при получении авторизации клиента: ', error);
      });
  }
}
