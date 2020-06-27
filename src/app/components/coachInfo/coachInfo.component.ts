import {Component, OnInit} from '@angular/core';
import {CoachInfoService} from './coachInfo.service';

@Component({
  selector: 'app-coach-info',
  templateUrl: './coachInfo.component.html',
})
export class CoachInfoComponent implements OnInit {
  players: InterFaceCoachInfo[] = [];

  constructor(private coachInfoService: CoachInfoService) {
  }

  ngOnInit() {
    this.coachInfoService.getCoachInfo().then((data: InterFaceCoachInfo[]) => {
        this.players = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по тренеру: ', error);
      });
  }
}


