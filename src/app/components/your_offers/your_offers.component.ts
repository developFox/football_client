import {Component} from '@angular/core';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';
import {FaqService} from '../faq/faq.service';

@Component({
  selector: 'app-your-offers',
  templateUrl: './your_offers.html',
})
export class YourOffersComponent {
  params = {
    name: {val: '', error: false},
    phone: {val: '', error: false},
    city: {val: '', error: false},
    question: {val: '', error: false},
    checked: {val: false, error: false}
  };

  constructor(public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs,
              public faqService: FaqService) {
    this.globalParamsBreadcrumbs.title = 'Ваши предложения';
  }

  sendOffers() {
    for (const i in this.params) {
      if (this.params.hasOwnProperty(i)) {
        this.params[i].error = (this.params[i].val === '' || this.params[i].val === false);
      }
    }

    for (const i in this.params) {
      if (this.params.hasOwnProperty(i) && this.params[i].error) {
        return false;
      }
    }

    this.faqService.sendOffers().then(() => {
      this.params = {
        name: {val: '', error: false},
        phone: {val: '', error: false},
        city: {val: '', error: false},
        question: {val: '', error: false},
        checked: {val: false, error: false}
      };
    }, () => {
      console.log('Ошибка при отправке вопроса');
    });
  }
}
