import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndOfSeaconSaleCardComponent } from './end-of-seacon-sale-card.component';

describe('EndOfSeaconSaleCardComponent', () => {
  let component: EndOfSeaconSaleCardComponent;
  let fixture: ComponentFixture<EndOfSeaconSaleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndOfSeaconSaleCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndOfSeaconSaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
