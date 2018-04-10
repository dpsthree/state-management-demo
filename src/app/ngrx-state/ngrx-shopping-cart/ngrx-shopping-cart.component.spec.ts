import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxShoppingCartComponent } from './ngrx-shopping-cart.component';

describe('NgrxShoppingCartComponent', () => {
  let component: NgrxShoppingCartComponent;
  let fixture: ComponentFixture<NgrxShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxShoppingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
