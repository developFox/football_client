import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  constructor(private mainService: MainService) {

  }
}
