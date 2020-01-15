import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {MainService} from './components/main/main.service';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpService} from './utils/http.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './components/auth/auth.service';
import {MessageAlertComponent} from './components/message_alert/message_alert.component';
import {GlobalParamsMessage} from './components/message_alert/global-params-message';
import {SessionStorageService} from './storage/session-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MessageAlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    HttpService,
    GlobalParamsMessage,
    SessionStorageService,
    MainService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
