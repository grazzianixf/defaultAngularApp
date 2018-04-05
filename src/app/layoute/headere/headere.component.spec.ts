import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadereComponent } from './headere.component';

describe('HeadereComponent', () => {
  let component: HeadereComponent;
  let fixture: ComponentFixture<HeadereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
