import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDashUpcomingComponent } from './top-dash-upcoming.component';

describe('TopDashUpcomingComponent', () => {
  let component: TopDashUpcomingComponent;
  let fixture: ComponentFixture<TopDashUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDashUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDashUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
