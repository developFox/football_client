import {Injectable} from '@angular/core';
import {HttpService} from '../../utils/http.service';


@Injectable()
export class MainService {

  constructor(private httpService: HttpService) {
  }
}
