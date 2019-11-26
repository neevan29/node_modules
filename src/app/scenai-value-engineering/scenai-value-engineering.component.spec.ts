import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiValueEngineeringComponent } from './scenai-value-engineering.component';

describe('ScenaiValueEngineeringComponent', () => {
  let component: ScenaiValueEngineeringComponent;
  let fixture: ComponentFixture<ScenaiValueEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiValueEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiValueEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
