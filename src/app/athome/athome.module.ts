import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitnesshomeComponent } from './fitnesshome/fitnesshome.component';
import { AllworkoutModule } from '../allworkout/allworkout.module';



@NgModule({
  declarations: [
    FitnesshomeComponent
  ],
  imports: [
    CommonModule,
    AllworkoutModule
  ]
  ,exports:[FitnesshomeComponent]
})
export class AthomeModule { }
