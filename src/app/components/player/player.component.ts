import {Component, OnInit} from '@angular/core';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  players: InterFacePlayers[] = [];
  filter = {
    coefficient_start: '',
    coefficient_end: '',
    year_start: '',
    year_end: '',
    floor: '',
    region: '',
    city: '',
    wins_start: '',
    wins_end: '',
    like: ''
  };

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayers({
      coefficient_start: this.filter.coefficient_start,
      coefficient_end: this.filter.coefficient_end,
      year_start: this.filter.year_start,
      year_end: this.filter.year_end,
      floor: this.filter.floor,
      region: this.filter.region,
      city: this.filter.city,
      wins_start: this.filter.wins_start,
      wins_end: this.filter.wins_end,
      like: this.filter.like,
    }).then((data: InterFacePlayers[]) => {
        this.players = data;
      },
      (error) => {
        console.log('Ошибка при получении списка футболистов: ', error);
      });
  }
}


