import {Component} from '@angular/core';
import {NewsService} from '../news_mini/news.service';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-news',
  templateUrl: './news.html',
})
export class NewsComponent {
  news: InterFaceNews[] = [];

  constructor(private newsService: NewsService,
              public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'Новости';
    this.getNews();
  }

  getNews() {
    this.newsService.getNews().then((data: InterFaceNewsProject[]) => {
        this.news = data;
      },
      (error) => {
        console.log('Ошибка при получении списка новостей проекта: ', error);
      });
  }
}


