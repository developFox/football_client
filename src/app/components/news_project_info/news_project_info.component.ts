import {Component} from '@angular/core';
import {NewsService} from '../news/news.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-news-project-info',
  templateUrl: './news_project_info.html',
})
export class NewsProjectInfoComponent {
  newsProject: InterFaceNewsProjectInfo = {
    id: null,
    title: '',
    img: '',
    date_create: '',
    text: ''
  };

  news: InterFaceNews[] = [];

  newsId = null;

  constructor(private newsService: NewsService,
              private router: ActivatedRoute) {
    this.router.params.subscribe(
      (params: Params): void => {
        this.newsId = params.id;
      }
    );

    this.getNewsInfo();
    this.getNews();
  }

  getNewsInfo() {
    this.newsService.getNewsProjectInfo({id: this.newsId}).then((data: InterFaceNewsProjectInfo) => {
        this.newsProject = data;
      },
      (error) => {
        console.log('Ошибка при получении списка новостей проекта: ', error);
      });
  }

  getNews() {
    this.newsService.getNews().then((data: InterFaceNews[]) => {
        this.news = data;
      },
      (error) => {
        console.log('Ошибка при получении списка новостей: ', error);
      });
  }
}


