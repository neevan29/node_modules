import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpSystemMonitorComponent } from './op-system-monitor.component';

describe('OpSystemMonitorComponent', () => {
  let component: OpSystemMonitorComponent;
  let fixture: ComponentFixture<OpSystemMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpSystemMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpSystemMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
