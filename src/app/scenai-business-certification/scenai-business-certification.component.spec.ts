import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenaiBusinessCertificationComponent } from './scenai-business-certification.component';

describe('ScenaiBusinessCertificationComponent', () => {
  let component: ScenaiBusinessCertificationComponent;
  let fixture: ComponentFixture<ScenaiBusinessCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenaiBusinessCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenaiBusinessCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
