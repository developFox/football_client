import {Component} from '@angular/core';
import {PlayerMessageService} from './player_message.service';

@Component({
  selector: 'app-player-message',
  templateUrl: './player_message.component.html',
})
export class PlayerMessageComponent {
  constructor(private playerMessageService: PlayerMessageService) {
  }
}
