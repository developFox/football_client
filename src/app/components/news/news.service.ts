import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class NewsService {
  news = [];
  newsProject = [];

  constructor(private httpService: HttpService) {
  }

  // получение списка новостей
  public getNews() {
    return new Promise((resolve, reject) => {
      if (this.news.length !== 0) {
        resolve(this.news);
      } else {
        this.httpService.prepareQuery('api/get-news', {})
          .then((result) => {
            console.log(1,result)
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка новостей', error);
              reject();
            }
          );
      }
    });
  }

  // получение списка новостей
  public getNewsProject(data) {
    return new Promise((resolve, reject) => {
      if (this.newsProject.length !== 0) {
        resolve(this.news);
      } else {
        this.httpService.prepareQuery('api/get-news-project', data)
          .then((result) => {
              resolve(result);
            },
            (error) => {
              console.log('Ошибка при получении списка новостей проекта', error);
              reject();
            }
          );
      }
    });
  }

  // получение новости проекта
  public getNewsProjectInfo(data) {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/get-news-project-info', data)
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при получении новости проета', error);
            reject();
          }
        );
    });
  }
}
