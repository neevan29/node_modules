import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiFeatureEngineeringComponent } from './scenai-feature-engineering.component';

describe('ScenaiFeatureEngineeringComponent', () => {
  let component: ScenaiFeatureEngineeringComponent;
  let fixture: ComponentFixture<ScenaiFeatureEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiFeatureEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiFeatureEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
