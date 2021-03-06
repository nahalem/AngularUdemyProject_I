import { RouterModule } from '@angular/router';
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
import {MenuModule} from 'primeng/primeng';
import {TieredMenuModule} from 'primeng/primeng';
import {MegaMenuModule} from 'primeng/primeng';
import {MultiSelectModule} from 'primeng/primeng';
// Routing
import { AppRoutingModule } from './app-routing.module';

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
import { ComponentLifecycleComponent } from './components/component-lifecycle/component-lifecycle.component';
import { ConsoleComponent } from './components/console/console.component';
import { ServerComponent } from "./components/server/server.component";
import { ServersComponent } from './components/servers/servers.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ServerElementComponent } from './components/server-element/server-element.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { PrimeNgModule } from "./modules/prime-ng/prime-ng.module";
import { LoginComponent } from './components/login/login.component';
import { MainComponentComponent } from './components/components-communication/main-component/main-component.component';
import { ListComponentComponent } from './components/components-communication/list-component/list-component.component';
import { ItemComponentComponent } from './components/components-communication/item-component/item-component.component';
import { BasicHiglightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { BindingsComponentComponent } from './components/examples/bindings-component/bindings-component.component';
import { DirectivesComponentComponent } from './components/examples/directives-component/directives-component.component';
import { SexDetectionDirective } from './directives/sex-detection/sex-detection.directive';
import { ValidationRequiredDirective } from './directives/validation-required/validation-required.directive';
import { Validation2RequiredDirective } from './directives/validation2-required/validation2-required.directive';
import { ValidatorComponentComponent } from './components/examples/validator-component/validator-component.component';
import { DropdownDirectiveDirective } from './directives/dropdown-directive/dropdown-directive.directive';
import { Dropdown2DirectiveDirective } from './directives/dropdown2-directive/dropdown2-directive.directive';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeService } from './services/recipe.service';

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
    ViewChildParentComponent,
    ComponentLifecycleComponent,
    ConsoleComponent,
    ServerComponent,
    ServersComponent,
    CockpitComponent,
    ServerElementComponent,
    NavigationComponent,
    LoginComponent,
    MainComponentComponent,
    ListComponentComponent,
    ItemComponentComponent,
    BasicHiglightDirective,
    BetterHighlightDirective,
    BindingsComponentComponent,
    DirectivesComponentComponent,
    SexDetectionDirective,
    ValidationRequiredDirective,
    Validation2RequiredDirective,
    ValidatorComponentComponent,
    DropdownDirectiveDirective,
    Dropdown2DirectiveDirective,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    MenuModule,
    TieredMenuModule,
    MegaMenuModule,
    MultiSelectModule,

    PrimeNgModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
