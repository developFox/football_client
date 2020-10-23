import {Component} from '@angular/core';
import {RegistrationService} from './registration.service';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.html',
})
export class RegistrationComponent {
  profile = 'player';

  player = {
    name: {val: '', error: false},
    surname: {val: '', error: false},
    phone: {val: '', error: false},
    email: {val: '', error: false},
    year: {val: '', error: false},
    city: {val: '', error: false},
    type_1: {val: '1', error: false},
    type_2: {val: '1', error: false},
    type_3: {val: '1', error: false},
    type_4: {val: '1', error: false},
    type_5: {val: '1', error: false},
    type_6: {val: '1', error: false},
    type_7: {val: '1', error: false},
    type_8: {val: '1', error: false}

  };

  constructor(private registrationService: RegistrationService,
              public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'Регистрация футболиста';
  }

  sendRegistration() {
    for (const i in this.player) {
      if (this.player.hasOwnProperty(i)) {
        this.player[i].error = this.player[i].val === '';
      }
    }

    for (const i in this.player) {
      if (this.player.hasOwnProperty(i) && this.player[i].error) {
        return false;
      }
    }

    this.registrationService.sendRegistration().then(() => {
      },
      () => {
        console.log('Ошибка при регистрации');
      });
  }
}


