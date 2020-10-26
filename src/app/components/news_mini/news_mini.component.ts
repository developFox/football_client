import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-news-mini',
  templateUrl: './news_mini.component.html',
})
export class NewsMiniComponent implements OnInit {
  news: InterFaceNewsMini[] = [];

  constructor(private newsService: NewsService,
              public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'Новости';
  }

  ngOnInit() {
    this.newsService.getNews().then((data: InterFaceNewsMini[]) => {
        if (data.length > 0) {
          this.news = data;
        }
      },
      (error) => {
        console.log('Ошибка при получении списка новостей: ', error);
      });
  }
}


