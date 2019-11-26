import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBvpGraphComponent } from './dash-bvp-graph.component';

describe('DashBvpGraphComponent', () => {
  let component: DashBvpGraphComponent;
  let fixture: ComponentFixture<DashBvpGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBvpGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBvpGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
