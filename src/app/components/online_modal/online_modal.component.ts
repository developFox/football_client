import {Component} from '@angular/core';
import {OnlineModalService} from './online_modal.service';

@Component({
  selector: 'app-online-modal',
  templateUrl: './online_modal.component.html',
})
export class OnlineModalComponent {
  constructor(private onlineModalService: OnlineModalService) {
  }
}
