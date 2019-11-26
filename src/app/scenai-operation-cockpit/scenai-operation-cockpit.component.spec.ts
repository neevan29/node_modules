import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiOperationCockpitComponent } from './scenai-operation-cockpit.component';

describe('ScenaiOperationCockpitComponent', () => {
  let component: ScenaiOperationCockpitComponent;
  let fixture: ComponentFixture<ScenaiOperationCockpitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiOperationCockpitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiOperationCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
