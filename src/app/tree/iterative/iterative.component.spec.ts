import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterativeComponent } from './iterative.component';

describe('IterativeComponent', () => {
  let component: IterativeComponent;
  let fixture: ComponentFixture<IterativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
