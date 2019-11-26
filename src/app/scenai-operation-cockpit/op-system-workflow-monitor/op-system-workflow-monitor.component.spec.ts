import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpSystemWorkflowMonitorComponent } from './op-system-workflow-monitor.component';

describe('OpSystemWorkflowMonitorComponent', () => {
  let component: OpSystemWorkflowMonitorComponent;
  let fixture: ComponentFixture<OpSystemWorkflowMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpSystemWorkflowMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpSystemWorkflowMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
