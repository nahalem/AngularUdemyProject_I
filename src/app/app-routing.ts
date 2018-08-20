// routing
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';

// my components
// import { HomePageComponent } from './components/home-page/home-page.component';
// import { NotificationsComponent } from './components/notifications/notifications.component';
// import { Auth0Component } from './components/auth0/auth0.component';
// import { LoginComponent } from './components/login/login.component';
// import { RegisterComponent } from './components/register/register.component';

// import { AuthGuard } from './share/services/auth-guard-service';

const appRoutes: Routes = [
  //   {
  //       path: 'person-module',
  //       loadChildren: 'app/modules/person/person.module#PersonModule',
  //       // data: {

  //       // }
  //   },
  //   {
  //     path: 'league-module',
  //     loadChildren: 'app/modules/league/league.module#LeagueModule',
  //     // data: {

  //     // }
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent
  // },
  // {
  //   path: 'home-page',
  //   component: HomePageComponent
  // },
  // {
  //   path: 'notification',
  //   component: NotificationsComponent
  // },
  // {
  //   path: 'auth0',
  //   component: Auth0Component
  // },
  // {
  //   path: '',
  //   component: HomePageComponent,
  //   canActivate: [AuthGuard]
  //   //   redirectTo: '/',
  //   //   pathMatch: 'full'
  //   // },
  //   // { path: '', component: NotificationsComponent },
  // },
  // {
  //   path: '**',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })], // , { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
