import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalStateComponent } from './temporal-state.component';

describe('TemporalStateComponent', () => {
  let component: TemporalStateComponent;
  let fixture: ComponentFixture<TemporalStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
