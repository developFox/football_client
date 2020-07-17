import {Component, OnInit} from '@angular/core';
import {ClubsService} from './clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.html',
})
export class ClubsComponent {
  clubs: InterFaceClubs[] = [];
  filter = {
    limit: 5,
    sort: 'id',
  };

  constructor(private clubsService: ClubsService) {
    this.getClubs();
  }

  getClubs() {
    this.clubsService.getClubs({
      limit: this.filter.limit,
      sort: this.filter.sort,
    }).then((data: InterFaceClubs[]) => {
        this.clubs = data;
      },
      (error) => {
        console.log('Ошибка при получении списка клубов: ', error);
      });
  }

  morePlayers() {
    this.filter.limit += 5;
    this.getClubs();
  }
}


