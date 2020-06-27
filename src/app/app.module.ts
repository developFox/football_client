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
import {AuthComponent} from './components/auth/auth.component';
import {SmsComponent} from './components/sms/sms.component';
import {UserStorageService} from './storage/user-storage.service';
import {PlayerComponent} from './components/player/player.component';
import {PlayerService} from './components/player/player.service';
import {PlayerInfoComponent} from './components/playerInfo/playerInfo.component';
import {PlayerInfoService} from './components/playerInfo/playerInfo.service';
import {NewsService} from './components/news/news.service';
import {CoachService} from './components/coach/coach.service';
import {CoachesComponent} from './components/coach/coaches.component';
import {CoachInfoComponent} from './components/coachInfo/coachInfo.component';
import {CoachInfoService} from './components/coachInfo/coachInfo.service';
import {RatingsComponent} from './components/ratings/ratings.component';
import {RatingsService} from './components/ratings/ratings.service';
import {TopComponent} from './components/top/top.component';
import {TopService} from './components/top/top.service';
import {ClubsService} from './components/clubs/clubs.service';
import {ClubsComponent} from './components/clubs/clubs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthComponent,
    MessageAlertComponent,
    ClientMenuComponent,
    MenuHeaderComponent,
    MenuFooterComponent,
    NewsComponent,
    SmsComponent,
    PlayerComponent,
    PlayerInfoComponent,
    CoachesComponent,
    CoachInfoComponent,
    RatingsComponent,
    TopComponent,
    ClubsComponent
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
    UserStorageService,
    MainService,
    AuthService,
    AuthGuard,
    PlayerService,
    PlayerInfoService,
    NewsService,
    CoachService,
    CoachInfoService,
    RatingsService,
    TopService,
    ClubsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
