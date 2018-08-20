import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgListComponent } from './prime-ng-list.component';

describe('PrimeNgListComponent', () => {
  let component: PrimeNgListComponent;
  let fixture: ComponentFixture<PrimeNgListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNgListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
