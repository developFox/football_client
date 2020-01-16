import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../utils/http.service';

@Injectable()
export class SessionStorageService {
  authenticated: EventEmitter<any> = new EventEmitter(false);

  constructor() {
  }

  get pubId(): string {
    return localStorage.getItem('pubId');
  }

  set pubId(value: string) {
    localStorage.setItem('pubId', value);
    this.authenticated.emit(true);
  }

  // возврат статического значения
  getAuthenticatedStatic() {
    return new Promise((resolve) => {
      resolve(this.pubId !== '' && this.pubId !== null);
    });
  }


}
