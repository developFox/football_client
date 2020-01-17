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
import {ClientMenuComponent} from './components/client_menu/client_menu.component';
import {AuthGuard} from './services/auth-guard.service';
import {MenuHeaderComponent} from './components/menu_header/menu_header.component';
import {MenuFooterComponent} from './components/menu_footer/menu_footer.component';
import {NewsComponent} from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MessageAlertComponent,
    ClientMenuComponent,
    MenuHeaderComponent,
    MenuFooterComponent,
    NewsComponent
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
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
