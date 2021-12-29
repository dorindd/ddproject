import { Component, OnInit } from '@angular/core';
declare var $: any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.scss']
})
export class MynavbarComponent implements OnInit {

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

}
