import { Component, OnInit } from '@angular/core';
declare var $: any;
import { interval } from 'rxjs';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-timeworkout',
  templateUrl: './timeworkout.component.html',
  styleUrls: ['./timeworkout.component.scss']
})
export class TimeworkoutComponent implements OnInit  {



show:boolean=false;

  counter: any;
  mycounter: any;
  value: any;


  constructor() { }

  ngOnInit(): void {



 $('.menu-btn').click(function () {
    $('.menu-btn').toggleClass('active');
    $('.overlay').toggleClass('active');
 $('.menu-container').toggleClass('active');
     });







  }


  start() {
    this.counter = this.value;
    this.mycounter = interval(2000).subscribe((data) => {
      this.value = data;
      this.counter--;
      this.value = '';

if(this.counter >0){
      this.show=true;

    }

if (this.counter < 0) {


         this.mycounter.unsubscribe(this.counter = 0);

        this.value = '';
        this.show=false;

  Swal.fire({
        backdrop:false,
        position: 'center',
        width: 400,
    icon:'success',
        title: 'End Workout',



      });



      }





    });







  }

  stop(){
    this.mycounter.unsubscribe();
    this.counter=0
    if(this.counter===0){
 this.show=false;
setTimeout(()=>{
      this.counter=''


    },1000)

    }
  }


}
