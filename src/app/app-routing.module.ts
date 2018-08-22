import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
// import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from "./components/landing-page/landing-page/landing-page.component";
import { RecipesComponent } from "./components/recipes/recipes/recipes.component";
import { ReceipesListComponent } from "./components/recipes/receipes-list/receipes-list.component";
import { RecipesDetailComponent } from "./components/recipes/recipes-detail/recipes-detail.component";
import { RecipesItemComponent } from "./components/recipes/recipes-item/recipes-item.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found/page-not-found.component";
import { ShoppingListComponent } from "./components/shopping/shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./components/shopping/shopping-edit/shopping-edit.component";

// import { LandingPageResolver } from "./components/landing-page/landing-page.resolver";
// import { UserChangePasswordComponent } from './components/user-change-password/user-change-password.component';
// import { SettingsPopup } from './components/settings/settingsPopup';
// import { LandingPage } from './components/landing-page/';
// import { AuthGuard } from './services/guard.service';
// import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
    // resolve: {
    //     profile: LandingPageResolver
    // }
  },
  {
    path: "recipes",
    component: RecipesComponent
    // resolve: {
    //     profile: LandingPageResolver
    // }
  },
  {
    path: "recipesList",
    component: ReceipesListComponent
    // resolve: {
    //     profile: LandingPageResolver
    // }
  },
  {
    path: "recipesDetail",
    component: RecipesDetailComponent
    // resolve: {
    //     profile: LandingPageResolver
    // }
  },
  {
    path: "recipesItem",
    component: RecipesItemComponent
    // resolve: {
    //     profile: LandingPageResolver
    // }
  },
  ,
  {
    path: "shoppingEdit",
    component: ShoppingEditComponent
    // resolve: {
    //     profile: LandingPageResolver
    // }
  },
  ,
  {
    path: "shoppingList",
    component: ShoppingListComponent
    // resolve: {
    //     profile: LandingPageResolver
    // }
  },
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
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
