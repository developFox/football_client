import {Injectable} from '@angular/core';

@Injectable()
export class GlobalParamsMessage {
  data = {
    title: '',
    body: '',
    type: ''
  };
}
