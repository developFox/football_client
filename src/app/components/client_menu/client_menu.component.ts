import {Component, OnInit} from '@angular/core';
import {SessionStorageService} from '../../storage/session-storage.service';

@Component({
  selector: 'app-client-menu',
  templateUrl: './client_menu.component.html',
})
export class ClientMenuComponent implements OnInit {
  show = false;

  constructor(private sessionStorage: SessionStorageService) {
  }

  ngOnInit() {
    this.sessionStorage.authenticated.subscribe((data) => {
      this.show = data;
    });
  }
}
