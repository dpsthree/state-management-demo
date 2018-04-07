import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStateComponent } from './service-state.component';

describe('ServiceStateComponent', () => {
  let component: ServiceStateComponent;
  let fixture: ComponentFixture<ServiceStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
