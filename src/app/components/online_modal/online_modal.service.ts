import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';

@Injectable()
export class OnlineModalService {
  constructor(private httpService: HttpService) {
  }
}
