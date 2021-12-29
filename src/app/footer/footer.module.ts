import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FitfooterComponent } from './fitfooter/fitfooter.component';
import { FormModule } from '../form/form.module';



@NgModule({
  declarations: [
    FitfooterComponent
  ],
  imports: [
    CommonModule,
    FormModule,
  ],
  exports: [FitfooterComponent]

})
export class FooterModule { }
