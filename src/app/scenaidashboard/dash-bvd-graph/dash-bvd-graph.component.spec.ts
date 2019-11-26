import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBvdGraphComponent } from './dash-bvd-graph.component';

describe('DashBvdGraphComponent', () => {
  let component: DashBvdGraphComponent;
  let fixture: ComponentFixture<DashBvdGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBvdGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBvdGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
