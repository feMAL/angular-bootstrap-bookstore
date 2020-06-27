import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsQuickviewComponent } from './cards-quickview.component';

describe('CardsQuickviewComponent', () => {
  let component: CardsQuickviewComponent;
  let fixture: ComponentFixture<CardsQuickviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsQuickviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsQuickviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
