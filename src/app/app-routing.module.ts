import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponent } from './components/login/login.component';
// import { LandingPageComponent } from "./components/landing-page/landing-page.component";
// import { LandingPageResolver } from "./components/landing-page/landing-page.resolver";
// import { UserChangePasswordComponent } from './components/user-change-password/user-change-password.component';
// import { SettingsPopup } from './components/settings/settingsPopup';
// import { LandingPage } from './components/landing-page/';
// import { AuthGuard } from './services/guard.service';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: LandingPageComponent,
    //     resolve: {
    //         profile: LandingPageResolver
    //     }
    // },
    // {
    //     path: 'forecast/home',
    //     loadChildren: 'app/IngenicoOneForecast/modules/home/home.module#HomeModule',
    //     canActivate: [AuthGuard],
    //     data: {
    //         claims: ['Forecast']
    //     }
    // },
    // {
    //     path: 'user/login',
    //     component: LoginComponent
    // },
    // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
