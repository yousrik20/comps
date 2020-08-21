import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanboyComponent } from './germanboy.component';

describe('GermanboyComponent', () => {
  let component: GermanboyComponent;
  let fixture: ComponentFixture<GermanboyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanboyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanboyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
