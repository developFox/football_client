import {Component, OnInit} from '@angular/core';
import {RatingsService} from './ratings.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.html',
})
export class RatingsComponent {
  ratings: InterFacePlayers[] = [];
  filter = {
    limit: 5,
    sort: 1990,
    filter: ''
  };

  years = [];
  showFilter = true;

  constructor(private ratingsService: RatingsService) {
    this.getPlayers();

    for (let i = 1990; i < 2010; i++) {
      this.years.push(i);
    }
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

  morePlayers() {
    this.filter.limit += 5;
    this.getPlayers();
  }

  changeFilter(data) {
    this.filter.filter = data;
    this.getPlayers();
  }

  changeShowFilter() {
    this.showFilter = !this.showFilter;
  }
}


