import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiExprementationComponent } from './scenai-exprementation.component';

describe('ScenaiExprementationComponent', () => {
  let component: ScenaiExprementationComponent;
  let fixture: ComponentFixture<ScenaiExprementationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiExprementationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiExprementationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
