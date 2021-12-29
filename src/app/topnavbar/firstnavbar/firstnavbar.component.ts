import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-firstnavbar',
  templateUrl: './firstnavbar.component.html',
  styleUrls: ['./firstnavbar.component.scss']
})
export class FirstnavbarComponent implements OnInit {

  constructor(private location:Router) { }

  ngOnInit(): void {

$(document).ready(function () {
  $('.burger-nav').on('click', function () {
    $('header nav ul').toggleClass('open');
  });
});










  }


getBmi(){
    document.getElementById("bmi")?.scrollIntoView({behavior:"smooth"})


}
getPilates(pageName:string){
  this.location.navigate([`${pageName}`])

}
getWorkout(pageName:string){
  this.location.navigate([`${pageName}`])

}
getWeights(pageName:string){
  this.location.navigate([`${pageName}`])

}
getFcontact(pageName:string){
  this.location.navigate([`${pageName}`])

}



  }
