import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MynavbarComponent } from './mynavbar/mynavbar.component';



@NgModule({
  declarations: [
    MynavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ MynavbarComponent]

})
export class NavprogramModule {}
