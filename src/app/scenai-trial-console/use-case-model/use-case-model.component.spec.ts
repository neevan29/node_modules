import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseModelComponent } from './use-case-model.component';

describe('UseCaseModelComponent', () => {
  let component: UseCaseModelComponent;
  let fixture: ComponentFixture<UseCaseModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseCaseModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCaseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
