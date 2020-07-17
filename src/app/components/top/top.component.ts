import {Component, OnInit} from '@angular/core';
import {TopService} from './top.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.html',
})
export class TopComponent {
  tops: InterFacePlayers[] = [];
  filter = {
    limit: 5,
    sort: 1990
  };

  years = [];

  constructor(private topService: TopService) {
    this.getPlayers();

    for (let i = 1990; i < 2010; i++) {
      this.years.push(i);
    }
  }

  getPlayers() {
    this.topService.getTops({
      limit: this.filter.limit,
      sort: this.filter.sort,
    }).then((data: InterFacePlayers[]) => {
        this.tops = data;
      },
      (error) => {
        console.log('Ошибка при получении топ 100: ', error);
      });
  }

  morePlayers() {
    this.filter.limit += 5;
    this.getPlayers();
  }
}


