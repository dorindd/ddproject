import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-fitnesshome',
  templateUrl: './fitnesshome.component.html',
  styleUrls: ['./fitnesshome.component.scss']
})
export class FitnesshomeComponent implements OnInit {

  constructor(private location: Router) { }

  ngOnInit(): void {
  }

getRouteOne(pageName:string){
this.location.navigate([`${pageName}`])

}
getRouteTwo(pageName:string){
this.location.navigate([`${pageName}`])

}
getRouteThree(pageName:string){
this.location.navigate([`${pageName}`])

}

}
