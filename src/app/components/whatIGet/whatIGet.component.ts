import {Component} from '@angular/core';
import {GlobalParamsBreadcrumbs} from '../breadcrumbs/global-params-breadcrumbs';

@Component({
  selector: 'app-what-i-get',
  templateUrl: './whatIGet.html',
})
export class WhatIGetComponent {
  constructor(public globalParamsBreadcrumbs: GlobalParamsBreadcrumbs) {
    this.globalParamsBreadcrumbs.title = 'то я получу вступив';
  }
}
