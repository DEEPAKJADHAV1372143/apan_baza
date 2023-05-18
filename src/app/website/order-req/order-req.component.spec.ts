import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReqComponent } from './order-req.component';

describe('OrderReqComponent', () => {
  let component: OrderReqComponent;
  let fixture: ComponentFixture<OrderReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
