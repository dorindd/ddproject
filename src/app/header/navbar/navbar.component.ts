import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  cursor: any;
  constructor(private location: Router) {}

  ngOnInit(): void {
    $('.menu-btn').click(function () {
      $('.menu-btn').toggleClass('active');
      $('.overlay').toggleClass('active');
      $('.menu-container').toggleClass('active');
    });

   }
    getHome(pageName:string){
 this.location.navigate([`${pageName}`])

  }

 getPilates(pageName:string){
 this.location.navigate([`${pageName}`])
  }
   getHomeworkout(pageName:string){
this.location.navigate([`${pageName}`])
  }
  getWeightsworkout(pageName:string){
this.location.navigate([`${pageName}`])
  }
   getContact(pageName:string){
 this.location.navigate([`${pageName}`])

  }

}
