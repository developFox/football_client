import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';


@Injectable()
export class RatingsService {

  constructor(private httpService: HttpService) {
  }

  // получение списка рейтинга
  public getRatings() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-ratings', {})
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
