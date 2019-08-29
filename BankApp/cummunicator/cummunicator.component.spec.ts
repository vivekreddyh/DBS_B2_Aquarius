import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CummunicatorComponent } from './cummunicator.component';

describe('CummunicatorComponent', () => {
  let component: CummunicatorComponent;
  let fixture: ComponentFixture<CummunicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CummunicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CummunicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
