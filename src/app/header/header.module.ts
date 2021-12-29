import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AllworkoutModule } from '../allworkout/allworkout.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,AllworkoutModule
  ],
  exports: [NavbarComponent]
})
export class HeaderModule { }
