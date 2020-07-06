import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCardsComponent } from './books-cards.component';

describe('BooksCardsComponent', () => {
  let component: BooksCardsComponent;
  let fixture: ComponentFixture<BooksCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
