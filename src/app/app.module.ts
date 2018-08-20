import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
// prime-ng components
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// custom components
import { PrimeNgComponent } from './components/prime-ng/prime-ng.component';
import { ParentComponent } from "./components/test-components/communication/parrent/parent.component";
import { ChildComponent } from "./components/test-components/communication/child/child.component";
import { HeaderComponent } from './components/header/header/header.component';
import { ReceipesListComponent } from './components/recipes/receipes-list/receipes-list.component';
import { RecipesDetailComponent } from './components/recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './components/recipes/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './components/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './components/recipes/recipes/recipes.component';
import { LandingPageComponent } from './components/landing-page/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found/page-not-found.component';
import { ViewChildComponent } from './components/test-components/communication/view-child-communication/child/child.component';
import { ViewChildParentComponent } from './components/test-components/communication/view-child-communication/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeNgComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    ReceipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    ViewChildComponent,
    ViewChildParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
