import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessValueListComponent } from './business-value-list.component';

describe('BusinessValueListComponent', () => {
  let component: BusinessValueListComponent;
  let fixture: ComponentFixture<BusinessValueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessValueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessValueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
