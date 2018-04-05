import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootereComponent } from './footere.component';

describe('FootereComponent', () => {
  let component: FootereComponent;
  let fixture: ComponentFixture<FootereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
