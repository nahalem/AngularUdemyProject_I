import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgFormComponent } from './prime-ng-form.component';

describe('PrimeNgFormComponent', () => {
  let component: PrimeNgFormComponent;
  let fixture: ComponentFixture<PrimeNgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeNgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
