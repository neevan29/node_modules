import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiDataScienceComponent } from './scenai-data-science.component';

describe('ScenaiDataScienceComponent', () => {
  let component: ScenaiDataScienceComponent;
  let fixture: ComponentFixture<ScenaiDataScienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiDataScienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
