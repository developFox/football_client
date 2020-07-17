import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class ClubsService {

  constructor(private httpService: HttpService) {
  }

  // получение списка тренеров
  public getClubs(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-clubs', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка клубов', error);
            reject();
          }
        );
    });
  }

}
