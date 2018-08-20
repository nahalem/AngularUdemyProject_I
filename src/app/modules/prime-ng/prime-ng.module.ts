import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgRoutingModule } from './prime-ng-routing.module';
import { PrimeNgComponent } from './prime-ng.component';
import { PrimeNgService } from './services/prime-ng.service';
import { PrimeNgListComponent } from './components/prime-ng-list/prime-ng-list.component';
import { PrimeNgFormComponent } from './components/prime-ng-form/prime-ng-form.component';

@NgModule({
  imports: [
    CommonModule,
    PrimeNgRoutingModule
  ],
  declarations: [PrimeNgComponent, PrimeNgListComponent, PrimeNgFormComponent],
  providers: [PrimeNgService]
})
export class PrimeNgModule { }
