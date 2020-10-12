import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class PlayerMessageService {
  constructor(private httpService: HttpService) {
  }

  // отправка сообщений игроку
  public playerSendMessage() {
    return new Promise((resolve, reject) => {
      this.httpService.prepareQuery('api/player-send-message', '')
        .then((result) => {
            resolve(result);
          },
          (error) => {
            console.log('Ошибка при отправке сообщений', error);
            reject();
          }
        );
    });
  }
}
