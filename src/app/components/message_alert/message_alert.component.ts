import {Component, ElementRef, ViewChild} from '@angular/core';
import {GlobalParamsMessage} from './global-params-message';
import {PlayerMessageService} from '../player_message/player_message.service';

@Component({
  selector: 'app-message-alert',
  templateUrl: './message_alert.component.html'
})
export class MessageAlertComponent {
  @ViewChild('closeBtn4') closeBtn3: ElementRef;

  message = {
    name: {val: '', error: false},
    phone: {val: '', error: false},
    email: {val: '', error: false},
    text: {val: '', error: false},
    checked: {val: false, error: false}
  };

  constructor(public globalParamsMessage: GlobalParamsMessage,
              private playerMessageService: PlayerMessageService) {}

  sendMessage() {
    for (const i in this.message) {
      if (this.message.hasOwnProperty(i)) {
        this.message[i].error = this.message[i].val === '';
      }
    }

    for (const i in this.message) {
      if (this.message.hasOwnProperty(i) && this.message[i].error) {
        return false;
      }
    }

    this.playerMessageService.playerSendMessage().then(() => {
      this.globalParamsMessage.showMessage = false;
      this.closeBtn3.nativeElement.click();

    }, () => {
      console.log('Ошибка при регистрации');
    });
  }
}
