import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorsHomeviewComponent } from './autors-homeview.component';

describe('AutorsHomeviewComponent', () => {
  let component: AutorsHomeviewComponent;
  let fixture: ComponentFixture<AutorsHomeviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutorsHomeviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutorsHomeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
