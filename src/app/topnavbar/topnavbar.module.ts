import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstnavbarComponent } from './firstnavbar/firstnavbar.component';




@NgModule({
  declarations: [
    FirstnavbarComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [FirstnavbarComponent]
})
export class TopnavbarModule { }
