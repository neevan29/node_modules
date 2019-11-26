import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaidashboardComponent } from './scenaidashboard.component';

describe('ScenaidashboardComponent', () => {
  let component: ScenaidashboardComponent;
  let fixture: ComponentFixture<ScenaidashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaidashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
