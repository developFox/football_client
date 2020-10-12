import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PlayerInfoService} from './playerInfo.service';
import {ActivatedRoute, Params} from '@angular/router';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';
import {GlobalParamsPlayerMessage} from '../player_message/global-params-player-message';

@Component({
  selector: 'app-player',
  templateUrl: './playerInfo.component.html',
})
export class PlayerInfoComponent {
  player: InterFacePlayerInfo = {
    id: null,
    year: '',
    region: '',
    city: '',
    fio: '',
    coefficient: '',
    images: '',
    birth_date: '',
    address: '',
    mother: '',
    father: '',
    mother_telephone: '',
    father_telephone: '',
    phone: '',
    email: '',
    clubs: '',
    imagesList: [],
    videosList: [],
    awardsList: [],
    description: '',
    marks: [{
      name: '',
      params: [{
        name: '',
        markcol: '',
        val: ''
      }]
    }],
    coach: '',
    coach_img: '',
    statistics: {
      played: '',
      wins: '',
      draw: '',
      goals: '',
      pass: '',
    },
    tournament: {list: [], listYear: []}
  };
  playerId: null;
  playersSimilar: InterFacePlayers[] = [];
  currentTournamentYear = '';
  showTournament: any = [];

  galleryThumbs = {
    spaceBetween: 10,
    slidesPerView: 4,
    slideToClickedSlide: true,
    centeredSlides: true,
    loop: true,
    virtualTranslate: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };

  currentTab = 'main';
  currentImg = '';

  constructor(private playerInfoService: PlayerInfoService,
              private changeDetector: ChangeDetectorRef,
              private globalParamsBreadcrumbs: GlobalParamsBreadcrumbs,
              private globalParamsPlayerMessage: GlobalParamsPlayerMessage,
              private router: ActivatedRoute) {
    this.globalParamsBreadcrumbs.title = 'Информация об игроке';
    this.router.params.subscribe(
      (params: Params): void => {
        this.playerId = params.id;

        this.getPlayers();
        this.getSimilarPlayers();
      }
    );
  }

  changeCurrentTab(data) {
    this.currentTab = data;
    this.changeDetector.detectChanges();
  }

  getPlayers() {
    this.playerInfoService.getPlayerInfo({id: this.playerId}).then((data: InterFacePlayerInfo) => {
        this.player = data;
        this.currentImg = this.player.imagesList[0];
        this.showTournament = data.tournament.list;
      },
      (error) => {
        console.log('Ошибка при получении детальной информации по футболисту: ', error);
      });
  }

  getSimilarPlayers() {
    this.playerInfoService.getSimilarPlayers({id: this.playerId}).then((data: InterFacePlayers[]) => {
        this.playersSimilar = data;
      },
      (error) => {
        console.log('Ошибка при получении списка фыутболистов: ', error);
      });
  }

  changeSlider(data) {
    const index = data === 0 ? 0 : data - 1;
    this.currentImg = this.player.imagesList[index];
  }

  changeTournament(data) {
    this.currentTournamentYear = data;

    if (data !== '') {
      this.showTournament = this.player.tournament.list.filter(item => item.year === data);
    } else {
      this.showTournament = this.player.tournament.list;
    }
  }

  showMessage() {
    this.globalParamsPlayerMessage.fio = this.player.fio;
    this.globalParamsPlayerMessage.showMessage = true;
  }
}


