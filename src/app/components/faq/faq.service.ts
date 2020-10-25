import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class FaqService {
  constructor(private httpService: HttpService) {
  }

  public sendQuestion() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/send-question', {})
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при отпраке вопроса', error);
            reject();
          }
        );
    });
  }

  public sendOffers() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/send-offers', {})
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при отпраке предложения', error);
            reject();
          }
        );
    });
  }
}
