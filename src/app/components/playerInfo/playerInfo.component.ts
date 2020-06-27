import {Component, OnInit} from '@angular/core';
import {PlayerInfoService} from './playerInfo.service';

@Component({
  selector: 'app-player',
  templateUrl: './playerInfo.component.html',
})
export class PlayerInfoComponent implements OnInit {
  players: InterFaceCoachInfo[] = [];

  constructor(private playerInfoService: PlayerInfoService) {
  }

  ngOnInit() {
    this.playerInfoService.getPlayerInfo().then((data: InterFaceCoachInfo[]) => {
        this.players = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по футболисту: ', error);
      });
  }
}


