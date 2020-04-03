import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotDashGamehistoryComponent } from './bot-dash-gamehistory.component';

describe('BotDashGamehistoryComponent', () => {
  let component: BotDashGamehistoryComponent;
  let fixture: ComponentFixture<BotDashGamehistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotDashGamehistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotDashGamehistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
