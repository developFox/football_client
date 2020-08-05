import {Component} from '@angular/core';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
})
export class MapComponent {
  constructor(public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'Карта';
  }
}
