import {Component, OnInit} from '@angular/core';
import {UserStorageService} from '../../storage/user-storage.service';
import {GlobalParamsAuth} from '../auth/global-params-auth';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu_header.component.html',
})
export class MenuHeaderComponent implements OnInit {
  user: any;

  constructor(public userStorageService: UserStorageService,
              private globalParamsAuth: GlobalParamsAuth) {

  }

  ngOnInit() {
    this.user = this.userStorageService;
  }

  showAuth() {
    this.globalParamsAuth.show = true;
  }
}


