import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';


@Injectable()
export class PlayerService {

  constructor(private httpService: HttpService) {
  }

  // получение списка игроков
  public getPlayers() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-players', {})
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка игроков', error);
            reject();
          }
        );
    });
  }

}
