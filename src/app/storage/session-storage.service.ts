import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SessionStorageService {
  authenticated: EventEmitter<any> = new EventEmitter(false);
  authenticatedStatic = false;

  constructor(private router: Router) {
  }

  get pubId(): string {
    return localStorage.getItem('pubId');
  }

  set pubId(value: string) {
    localStorage.setItem('pubId', value);
    this.authenticated.emit(true);
    this.authenticatedStatic = true;
  }

  // выход
  exit() {
    localStorage.removeItem('pubId');
    this.authenticated.emit(false);
    this.authenticatedStatic = false;
    this.router.navigate(['/']);
  }

  // возврат статического значения
  getAuthenticatedStatic() {
    return new Promise((resolve) => {
      resolve(this.authenticatedStatic);
    });
  }
}
