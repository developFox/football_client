import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';


@Injectable()
export class CoachService {

  constructor(private httpService: HttpService) {
  }

  // получение списка тренеров
  public getCoaches() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-coaches', {})
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка тренеров', error);
            reject();
          }
        );
    });
  }

}
