import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { trigger, transition, useAnimation } from '@angular/animations';
import {pulse} from 'ng-animate';
declare var $: any;
@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.scss'],
animations: [
    trigger('bounce', [transition('* => *', useAnimation(pulse))])

  ],

})
export class TuesdayComponent implements OnInit {

    bounce: any;
  todo: any[] = [];

  done: any[] = [];

  value: any;
  showNot:boolean =false;
  constructor() {}

  ngOnInit(): void {
    this.todo = JSON.parse(localStorage.getItem('token2')!);


  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  add() {
    this.todo = this.todo || [];

    this.todo.push(this.value);
    let audio = new Audio();
    audio.src = '../assets/sound1.wav';
    audio.load();
    audio.play();
    this.value = '';
    localStorage.setItem('token2', JSON.stringify(this.todo));
  }
  delate(index: any) {
    this.done.splice(index, 1);
 let audio = new Audio();
 audio.src = '../assets/sound.wav';
 audio.load();
 audio.play();
    localStorage.setItem('token2', JSON.stringify(this.todo));
  }

  getdelate(index: any) {
    this.todo.splice(index, 1);
 let audio = new Audio();
 audio.src = '../assets/sound.wav';
 audio.load();
 audio.play();
    localStorage.setItem('token2', JSON.stringify(this.todo));
  }


 getInfo(){
    this.showNot=true;
  }
getClosed(){
 this.showNot=false;

}



}


