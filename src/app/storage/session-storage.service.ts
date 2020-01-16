import {EventEmitter, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class SessionStorageService {
  authenticated: EventEmitter<any> = new EventEmitter(false);

  constructor(private router:Router) {
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
      resolve(this.pubId !== '' && this.pubId !== null );
    });
  }

  // выход
  public exit() {
    localStorage.removeItem('pubId');
    this.authenticated.emit(false);
    this.router.navigate(['/']);
  }
}
