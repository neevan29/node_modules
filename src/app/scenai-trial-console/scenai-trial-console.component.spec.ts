import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiTrialConsoleComponent } from './scenai-trial-console.component';

describe('ScenaiTrialConsoleComponent', () => {
  let component: ScenaiTrialConsoleComponent;
  let fixture: ComponentFixture<ScenaiTrialConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiTrialConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiTrialConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
