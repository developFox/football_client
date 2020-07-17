import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class ClubsService {

  constructor(private httpService: HttpService) {
  }

  // получение списка клубов
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

  // получение списка клубов для выбора
  public getClubsList() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-clubs-list', {})
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка клубов для списка', error);
            reject();
          }
        );
    });
  }

}
