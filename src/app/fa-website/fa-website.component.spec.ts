import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaWebsiteComponent } from './fa-website.component';

describe('FaWebsiteComponent', () => {
  let component: FaWebsiteComponent;
  let fixture: ComponentFixture<FaWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
