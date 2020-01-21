import {Injectable} from '@angular/core';

@Injectable()
export class UserStorageService {
  user: InterFaceGlobalUser = {
    fio: '',
    type_id: null,
    type_name: '',
  };

  constructor() {
  }

  get userData(): InterFaceGlobalUser {
    return this.user;
  }

  set userData(data: InterFaceGlobalUser) {
    this.user = data;
  }
}
