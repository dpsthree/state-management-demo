import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxProductListComponent } from './ngrx-product-list.component';

describe('NgrxProductListComponent', () => {
  let component: NgrxProductListComponent;
  let fixture: ComponentFixture<NgrxProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
