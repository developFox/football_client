import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './services/auth-guard.service';
import {PlayerComponent} from './components/player/player.component';
import {ClubsComponent} from './components/clubs/clubs.component';
import {TopComponent} from './components/top/top.component';
import {RatingsComponent} from './components/ratings/ratings.component';
import {AboutComponent} from './components/about/about.component';
import {NewsProjectComponent} from './components/news_project/news_project.component';
import {NewsProjectInfoComponent} from './components/news_project_info/news_project_info.component';
import {PlayerInfoComponent} from './components/playerInfo/playerInfo.component';
import {CooperationComponent} from './components/cooperation/cooperation.component';
import {WhatIGetComponent} from './components/whatIGet/whatIGet.component';
import {YourOffersComponent} from './components/your_offers/your_offers.component';
import {FaqComponent} from './components/faq/faq.component';
import {ContactsComponent} from './components/contacts/contacts.component';
import {MapComponent} from './components/map/map.component';
import {CoachInfoComponent} from './components/coachInfo/coachInfo.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {NewsInfoComponent} from './components/news_info/news_info.component';
import {NewsComponent} from './components/news/news.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'players',
    component: PlayerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'player/:id',
    component: PlayerInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'coach/:id',
    component: CoachInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'clubs',
    component: ClubsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'top',
    component: TopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ratings',
    component: RatingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'news-project',
    component: NewsProjectComponent
  },
  {
    path: 'news-project/:id',
    component: NewsProjectInfoComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:id',
    component: NewsInfoComponent
  },
  {
    path: 'cooperation',
    component: CooperationComponent
  },
  {
    path: 'what-i-get',
    component: WhatIGetComponent
  },
  {
    path: 'your-offers',
    component: YourOffersComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
  constructor() {
  }
}
