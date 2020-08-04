import {Component} from '@angular/core';

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


  sendQuestion() {
    // заявка отправлена
  }
}
