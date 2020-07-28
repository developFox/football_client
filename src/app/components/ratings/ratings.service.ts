import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';


@Injectable()
export class RatingsService {

  constructor(private httpService: HttpService) {
  }

  // получение списка рейтинга
  public getRatings(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-ratings', data)
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

  // получение списка фильтров для поиска и сортировки
  public getPlayersFilter() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-ratings-filter', '')
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении фильтра', error);
            reject();
          }
        );
    });
  }

}
