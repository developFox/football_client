import {Component, OnInit} from '@angular/core';
import {ClubsService} from './clubs.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.html',
})
export class ClubsComponent implements OnInit {
  clubs: InterFaceTop[] = [];

  constructor(private clubsService: ClubsService) {
  }

  ngOnInit() {
    this.clubsService.getClubs().then((data: InterFaceTop[]) => {
        this.clubs = data;
      },
      (error) => {
        console.log('Ошибка при получении списка клубов: ', error);
      });
  }
}


