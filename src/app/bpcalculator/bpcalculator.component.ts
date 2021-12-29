import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bpcalculator',
  templateUrl: './bpcalculator.component.html',
  styleUrls: ['./bpcalculator.component.scss'],
})
export class BpcalculatorComponent implements OnInit {
  word: any = 'Result';

  height: any = '';
  weight: any = '';
  total: any;
  value1: boolean = false;
  value2: boolean = false;
  value3: boolean = false;
  value4: boolean = false;

  constructor() {




  }

  ngOnInit(): void {




  }

  getData() {

    this.total = this.weight / (((this.height / 100) * this.height) / 100);


  }

  getClear() {
    this.total = '';
    this.weight = '';
    this.height = '';
    this.value1 = false;
    this.value2 = false;
    this.value3 = false;
    this.value4 = false;
  }
  getColor() {
    if (this.total >= 1 && this.total <= 18.5) {
      this.value1 = true;

      return '#FCAF41';
    } else if (this.total >= 18.5 && this.total <= 25) {
      this.value2 = true;

      return '#2FA23C';
    } else if (this.total >= 25 && this.total <= 30) {
      this.value3 = true;
      return '#E75D2C';
    } else if (this.total >= 30) {
      this.value4 = true;
      return '#BF011E';
    } else {
      return 'transparent';
    }
  }
}
