import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiDataEngineeringComponent } from './scenai-data-engineering.component';

describe('ScenaiDataEngineeringComponent', () => {
  let component: ScenaiDataEngineeringComponent;
  let fixture: ComponentFixture<ScenaiDataEngineeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiDataEngineeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiDataEngineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
