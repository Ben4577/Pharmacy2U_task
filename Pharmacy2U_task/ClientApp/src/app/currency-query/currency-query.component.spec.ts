import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyQueryComponent } from './currency-query.component';

describe('CurrencyQueryComponent', () => {
  let component: CurrencyQueryComponent;
  let fixture: ComponentFixture<CurrencyQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
