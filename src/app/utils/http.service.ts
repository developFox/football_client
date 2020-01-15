import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Base64} from 'js-base64';

@Injectable()
export class HttpService {
  static handlerError(error: any = {}) {
    console.log('Ошибка после http-запроса', error);

    let text_error: string;
    if (typeof error.status !== 'undefined') {
      if (error.status === 0) {
        text_error = 'Неизвестная ошибка';
      } else if (error.status === 200) {
        text_error = error.body.json();
      } else if (error.status === 404) {
        text_error = 'Страница не найдена';
      } else if (error.status === 500) {
        text_error = 'временно не доступен';
        throw {name: 'CRM', message: 'CRM временно не доступен'};
      } else {
        text_error = '';
      }
    } else {
      text_error = '';
    }

    return Observable.throw(text_error);
  }

  constructor(private http: HttpClient) {
  }
}
