import {Component, OnInit} from '@angular/core';
import {RatingsService} from './ratings.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
})
export class RatingsComponent implements OnInit {
  ratings: InterFaceTop[] = [];

  constructor(private ratingsService: RatingsService) {
  }

  ngOnInit() {
    this.ratingsService.getRatings().then((data: InterFaceTop[]) => {
        this.ratings = data;
      },
      (error) => {
        console.log('Ошибка при получении рейтинга: ', error);
      });
  }
}


