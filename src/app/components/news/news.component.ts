import {Component, OnInit} from '@angular/core';
import {NewsService} from './news.service';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  news: InterFaceNews[] = [];

  constructor(private newsService: NewsService,
              public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'Новости';
  }

  ngOnInit() {
    this.newsService.getNews().then((data: InterFaceNews[]) => {
        this.news = data;
      },
      (error) => {
        console.log('Ошибка при получении списка новостей: ', error);
      });
  }
}


