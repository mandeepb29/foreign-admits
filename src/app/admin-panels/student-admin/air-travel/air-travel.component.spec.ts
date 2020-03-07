import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirTravelComponent } from './air-travel.component';

describe('AirTravelComponent', () => {
  let component: AirTravelComponent;
  let fixture: ComponentFixture<AirTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
