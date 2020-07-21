import {Component} from '@angular/core';
import {NewsService} from '../news/news.service';

@Component({
  selector: 'app-news-project',
  templateUrl: './news_project.html',
})
export class NewsProjectComponent {
  news: InterFaceNewsProject[] = [];
  limit: 5;

  constructor(private newsService: NewsService) {
    this.getNews();
  }

  getNews() {
    this.newsService.getNewsProject({limit: this.limit}).then((data: InterFaceNewsProject[]) => {
        this.news = data;
      },
      (error) => {
        console.log('Ошибка при получении списка новостей проекта: ', error);
      });
  }

  moreNews() {
    this.limit += 5;
    this.getNews();
  }
}


