import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiDataSetComponent } from './scenai-data-set.component';

describe('ScenaiDataSetComponent', () => {
  let component: ScenaiDataSetComponent;
  let fixture: ComponentFixture<ScenaiDataSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiDataSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiDataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
