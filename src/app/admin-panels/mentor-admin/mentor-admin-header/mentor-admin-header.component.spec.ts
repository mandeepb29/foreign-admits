import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAdminHeaderComponent } from './mentor-admin-header.component';

describe('MentorAdminHeaderComponent', () => {
  let component: MentorAdminHeaderComponent;
  let fixture: ComponentFixture<MentorAdminHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAdminHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAdminHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
