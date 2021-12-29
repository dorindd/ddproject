import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { MyscheduleModule } from '../myschedule/myschedule.module';



@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MyscheduleModule
  ],
  exports: [CalendarComponent]
})
export class TimetableModule { }
