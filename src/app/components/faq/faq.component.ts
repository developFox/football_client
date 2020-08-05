import {Component} from '@angular/core';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
})
export class FaqComponent {
  params = {
    name: '',
    phone: '',
    city: '',
    question: ''
  };

  constructor(public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'Ответы на вопросы';
  }

  sendQuestion() {
    // заявка отправлена
  }
}
