import {Component, OnInit} from '@angular/core';
import {CoachService} from './coach.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
})
export class CoachesComponent implements OnInit {
  players: InterFaceCoaches[] = [];

  constructor(private coachService: CoachService) {
  }

  ngOnInit() {
    this.coachService.getCoaches().then((data: InterFaceCoaches[]) => {
        this.players = data;
      },
      (error) => {
        console.log('Ошибка при получении списка тренеров: ', error);
      });
  }
}


