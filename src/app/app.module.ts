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
    RecipesComponent
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
