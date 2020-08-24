import {Component, OnInit} from '@angular/core';
import {UserStorageService} from '../../storage/user-storage.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu_header.component.html',
})
export class MenuHeaderComponent implements OnInit {
  user: any;

  constructor(public userStorageService: UserStorageService) {

  }

  ngOnInit() {
    this.user = this.userStorageService;
  }
}


