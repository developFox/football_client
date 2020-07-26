import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';


@Injectable()
export class PlayerInfoService {

  constructor(private httpService: HttpService) {
  }

  // получение информации об игроке
  public getPlayerInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-player-info', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении информации об игроке', error);
            reject();
          }
        );
    });
  }

}
