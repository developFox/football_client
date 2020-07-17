import {Component, OnInit} from '@angular/core';
import {RatingsService} from './ratings.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
})
export class RatingsComponent implements OnInit {
  ratings: InterFacePlayers[] = [];

  constructor(private ratingsService: RatingsService) {
  }

  ngOnInit() {
    this.ratingsService.getRatings().then((data: InterFacePlayers[]) => {
        this.ratings = data;
      },
      (error) => {
        console.log('Ошибка при получении рейтинга: ', error);
      });
  }
}


