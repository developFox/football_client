import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class RegistrationService {

  constructor(private httpService: HttpService) {
  }

  // получение списка рейтинга
  public sendRegistration() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/send-registration', '')
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении рейтинга', error);
            reject();
          }
        );
    });
  }
}
