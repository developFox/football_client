import {Component, OnInit} from '@angular/core';
import {AuthService} from './components/auth/auth.service';
import {HttpService} from './utils/http.service';
import {SessionStorageService} from './storage/session-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.checkAuth().then(() => {
      },
      (error) => {
        console.log('Ошибка при получении авторизации клиента: ', error);
      });
  }
}
