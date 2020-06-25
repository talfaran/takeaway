import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDashaboardComponent } from './users-dashaboard.component';

describe('UsersDashaboardComponent', () => {
  let component: UsersDashaboardComponent;
  let fixture: ComponentFixture<UsersDashaboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDashaboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDashaboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
