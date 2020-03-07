import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorAdminSidebarComponent } from './mentor-admin-sidebar.component';

describe('MentorAdminSidebarComponent', () => {
  let component: MentorAdminSidebarComponent;
  let fixture: ComponentFixture<MentorAdminSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorAdminSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorAdminSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
