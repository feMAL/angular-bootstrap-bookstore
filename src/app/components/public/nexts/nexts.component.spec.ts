import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextsComponent } from './nexts.component';

describe('NextsComponent', () => {
  let component: NextsComponent;
  let fixture: ComponentFixture<NextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
