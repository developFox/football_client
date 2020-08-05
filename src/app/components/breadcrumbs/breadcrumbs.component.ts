import {Component} from '@angular/core';
import {GlobalParamsBreadcrumbs} from './global-params-breadcrumbs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
})
export class BreadcrumbsComponent {
  data: any;

  constructor(public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.data = this.globalParamsBreadcrumbs;
  }
}
