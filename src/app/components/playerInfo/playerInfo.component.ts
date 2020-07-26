import {Component, OnInit} from '@angular/core';
import {PlayerInfoService} from './playerInfo.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './playerInfo.component.html',
})
export class PlayerInfoComponent implements OnInit {
  player: InterFacePlayerInfo = {
    id: null,
    year: '',
    region: '',
    city: '',
    fio: '',
    coefficient: '',
    images: '',
    played: '',
    wins: '',
    birth_date: '',
    address: '',
    mother: '',
    father: '',
    mother_telephone: '',
    father_telephone: '',
    phone: '',
    email: '',
    imagesList: [],
    videosList: []
  };
  playerId: null;

  constructor(private playerInfoService: PlayerInfoService,
              private router: ActivatedRoute) {
    this.router.params.subscribe(
      (params: Params): void => {
        this.playerId = params.id;
      }
    );
  }

  ngOnInit() {
    this.playerInfoService.getPlayerInfo({id: this.playerId}).then((data: InterFacePlayerInfo) => {
        this.player = data;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по футболисту: ', error);
      });
  }
}


