import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';


@Injectable()
export class CoachInfoService {

  constructor(private httpService: HttpService) {
  }

  // получение информации о тренере
  public getCoachInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-coach-info', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации о тренере', error);
            reject();
          }
        );
    });
  }
}
