import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';
import {RatingsService} from '../ratings/ratings.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  ratings: InterFacePlayers[] = [];
  filter = {
    limit: 5,
    sort: 1990,
    filter: ''
  };

  constructor(private mainService: MainService,
              private ratingsService: RatingsService) {
    this.getPlayers();
  }

  getPlayers() {
    this.ratingsService.getRatings({
      limit: this.filter.limit,
      sort: this.filter.sort,
      filter: this.filter.filter,
    }).then((data: InterFacePlayers[]) => {
        this.ratings = data;
      },
      (error) => {
        console.log('Ошибка при получении рейтинга: ', error);
      });
  }
}
