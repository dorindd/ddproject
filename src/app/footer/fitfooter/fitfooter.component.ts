import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitfooter',
  templateUrl: './fitfooter.component.html',
  styleUrls: ['./fitfooter.component.scss']
})
export class FitfooterComponent implements OnInit {

  constructor(private location: Router) { }

  ngOnInit(): void {
  }
 getHome(pageName:string){
 this.location.navigate([`${pageName}`])

  }
  getContact(pageName:string){
 this.location.navigate([`${pageName}`])

  }

  getBmi(pageName:string){
 this.location.navigate([`${pageName}`])

     document.getElementById("bmi")?.scrollIntoView({behavior:"smooth"})
  }
  getScheduler(pageName:string){
 this.location.navigate([`${pageName}`])
     document.getElementById("schedule")?.scrollIntoView({behavior:"smooth"})
  }
  getPilates(pageName:string){
 this.location.navigate([`${pageName}`])
     document.getElementById("pilates")?.scrollIntoView({behavior:"smooth"})
  }

  getHomeworkout(pageName:string){
this.location.navigate([`${pageName}`])
 document.getElementById("workHome")?.scrollIntoView({behavior:"smooth"})


  }
  getWeightsworkout(pageName:string){
this.location.navigate([`${pageName}`])
 document.getElementById("wheighs")?.scrollIntoView({behavior:"smooth"})


  }

}
