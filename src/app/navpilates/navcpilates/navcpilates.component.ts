import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-navcpilates',
  templateUrl: './navcpilates.component.html',
  styleUrls: ['./navcpilates.component.scss']
})
export class NavcpilatesComponent implements OnInit {

  constructor(private location:Router) { }

  ngOnInit(): void {
$(document).ready(function () {
  $('.burger-nav').on('click', function () {
    $('header nav ul').toggleClass('open');
  });
});


  }
  gethome(pageName:string){
    this.location.navigate([`${pageName}`])
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


    getContact(pageName:string){
 this.location.navigate([`${pageName}`])

  }

}
