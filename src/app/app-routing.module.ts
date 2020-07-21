import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './services/auth-guard.service';
import {AuthComponent} from './components/auth/auth.component';
import {PlayerComponent} from './components/player/player.component';
import {ClubsComponent} from './components/clubs/clubs.component';
import {TopComponent} from './components/top/top.component';
import {RatingsComponent} from './components/ratings/ratings.component';
import {AboutComponent} from './components/about/about.component';
import {NewsProjectComponent} from './components/news_project/news_project.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'players',
    component: PlayerComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {
  constructor() {
  }
}
