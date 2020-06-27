import {Component, OnInit} from '@angular/core';
import {TopService} from './top.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
})
export class TopComponent implements OnInit {
  tops: InterFaceTop[] = [];

  constructor(private topService: TopService) {
  }

  ngOnInit() {
    this.topService.getTops().then((data: InterFaceTop[]) => {
        this.tops = data;
      },
      (error) => {
        console.log('Ошибка при получении топ 100: ', error);
      });
  }
}


