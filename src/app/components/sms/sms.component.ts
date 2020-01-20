import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
})
export class SmsComponent implements OnInit {
  showSmsCode=false;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {

  }

  auth() {

  }
}
