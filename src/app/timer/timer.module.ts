import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeworkoutComponent } from './timeworkout/timeworkout.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TimeworkoutComponent
  ],
  imports: [
    CommonModule,FormsModule,
  ],
  exports: [TimeworkoutComponent],
})
export class TimerModule { }
