import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesAppliedComponent } from './services-applied.component';

describe('ServicesAppliedComponent', () => {
  let component: ServicesAppliedComponent;
  let fixture: ComponentFixture<ServicesAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
