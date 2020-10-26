import {Component} from '@angular/core';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';
import {GlobalParamsMessage} from '../message_alert/global-params-message';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.html',
})
export class ContactsComponent {
  constructor(public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs,
              public globalParamsMessage: GlobalParamsMessage) {
    this.globalParamsBreadcrumbs.title = 'Контакты';
  }
}
