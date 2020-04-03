import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDashWLstatsComponent } from './top-dash-wlstats.component';

describe('TopDashWLstatsComponent', () => {
  let component: TopDashWLstatsComponent;
  let fixture: ComponentFixture<TopDashWLstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDashWLstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDashWLstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
