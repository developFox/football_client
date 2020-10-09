import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class PlayerMessageService {
  constructor(private httpService: HttpService) {
  }
}
