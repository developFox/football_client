import {Component, OnInit} from '@angular/core';
import {PlayerService} from './player.service';
import {Options} from 'ng5-slider';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent {
  players: InterFacePlayers[] = [];
  filter = {
    coefficient_start: 0,
    coefficient_end: 10,
    year_start: 10,
    year_end: 30,
    floor: 1,
    region: {id: null, name: '', city: []},
    city: '',
    wins_start: 0,
    wins_end: 100,
    like: '',
    sort: 'coefficient',
    limit: 5
  };

  regions: InterFaceRegions[] = [];

  // сортировка
  sorts = [
    {id: 'coefficient', name: 'По коэфициенту'},
    {id: 'games', name: 'По играм'},
    {id: 'win', name: 'По победам'},
    {id: 'goals', name: 'По голам'}
  ];

  options: Options = {
    floor: this.filter.coefficient_start,
    ceil: this.filter.coefficient_end
  };

  optionsYear: Options = {
    floor: this.filter.year_start,
    ceil: this.filter.year_end
  };

  optionsWins: Options = {
    floor: this.filter.wins_start,
    ceil: this.filter.wins_end
  };

  constructor(private playerService: PlayerService) {
    this.getPlayers();

    this.playerService.getRegions().then((data: InterFaceRegions[]) => {
        this.regions = data;
      },
      (error) => {
        console.log('Ошибка при получении списка футболистов: ', error);
      });
  }

  getPlayers() {
    this.playerService.getPlayers({
      coefficient_start: this.filter.coefficient_start,
      coefficient_end: this.filter.coefficient_end,
      year_start: this.filter.year_start,
      year_end: this.filter.year_end,
      floor: this.filter.floor,
      region: this.filter.region.id,
      city: this.filter.city,
      wins_start: this.filter.wins_start,
      wins_end: this.filter.wins_end,
      like: this.filter.like,
      sort: this.filter.sort,
      limit: this.filter.limit,
    }).then((data: InterFacePlayers[]) => {
        this.players = data;
      },
      (error) => {
        console.log('Ошибка при получении списка футболистов: ', error);
      });
  }

  morePlayers() {
    this.filter.limit += 5;
  }

  clear() {
    this.filter = {
      coefficient_start: 0,
      coefficient_end: 10,
      year_start: 10,
      year_end: 30,
      floor: 1,
      region: {id: null, name: '', city: []},
      city: '',
      wins_start: 0,
      wins_end: 100,
      like: '',
      sort: 'coefficient',
      limit: 5
    };

    this.getPlayers();
  }
}


