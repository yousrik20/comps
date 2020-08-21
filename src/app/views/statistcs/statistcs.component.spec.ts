import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistcsComponent } from './statistcs.component';

describe('StatistcsComponent', () => {
  let component: StatistcsComponent;
  let fixture: ComponentFixture<StatistcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatistcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
