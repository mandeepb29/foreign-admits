import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SUniversitiesComponent } from './s-universities.component';

describe('SUniversitiesComponent', () => {
  let component: SUniversitiesComponent;
  let fixture: ComponentFixture<SUniversitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SUniversitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
