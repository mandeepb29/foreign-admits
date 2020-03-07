import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SMentorsComponent } from './s-mentors.component';

describe('SMentorsComponent', () => {
  let component: SMentorsComponent;
  let fixture: ComponentFixture<SMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
