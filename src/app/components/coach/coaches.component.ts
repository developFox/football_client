import {Component, OnInit} from '@angular/core';
import {CoachService} from './coach.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
})
export class CoachesComponent implements OnInit {
  coaches: InterFacePlayers[] = [];

  constructor(private coachService: CoachService) {
  }

  ngOnInit() {
    this.coachService.getCoaches().then((data: InterFacePlayers[]) => {
        this.coaches = data;
      },
      (error) => {
        console.log('Ошибка при получении списка тренеров: ', error);
      });
  }
}


