import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDwptGraphComponent } from './dash-dwpt-graph.component';

describe('DashDwptGraphComponent', () => {
  let component: DashDwptGraphComponent;
  let fixture: ComponentFixture<DashDwptGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashDwptGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDwptGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
