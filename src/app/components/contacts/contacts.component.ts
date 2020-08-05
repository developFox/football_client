import {Component} from '@angular/core';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.html',
})
export class ContactsComponent {
  constructor(public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'Контакты';
  }
}
