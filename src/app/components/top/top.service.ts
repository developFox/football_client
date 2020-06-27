import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class TopService {

  constructor(private httpService: HttpService) {
  }

  // получение списка топ 100
  public getTops() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-top', {})
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении топ 100', error);
            reject();
          }
        );
    });
  }

}
