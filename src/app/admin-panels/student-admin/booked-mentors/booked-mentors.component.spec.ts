import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedMentorsComponent } from './booked-mentors.component';

describe('BookedMentorsComponent', () => {
  let component: BookedMentorsComponent;
  let fixture: ComponentFixture<BookedMentorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedMentorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedMentorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
