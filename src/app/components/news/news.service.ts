import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class NewsService {

  constructor(private httpService: HttpService) {
  }

  // получение списка новостей
  public getNews() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-news', {})
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении списка новостей', error);
            reject();
          }
        );
    });
  }

}
