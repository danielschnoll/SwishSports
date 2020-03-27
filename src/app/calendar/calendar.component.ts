import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { colors } from '../utils/colors';

interface Game {
	opponent: string;
	location: string;
	start_time: Date;
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  constructor() { }

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events$: CalendarEvent[];

  activeDayIsOpen: boolean = true;

  events: CalendarEvent[] = [
  	{
  		start: new Date(2020, 2, 20, 12),
  		end: new Date(2020, 2, 20, 14),
  		title: "vs Team A @ 87 Gym",
  		color: colors.red
  	},
  	{
  		start: new Date(2020, 2, 23, 16),
  		end: new Date(2020, 2, 23, 17),
  		title: "vs Team B @ Mueller Center",
  		color: colors.red
  	},
  	{
  		start: new Date(2020, 3, 2, 12),
  		end: new Date(2020, 3, 2, 13),
  		title: "vs Team C @ fuck",
  		color: colors.yellow
  	}
  	]

  ngOnInit(): void {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
