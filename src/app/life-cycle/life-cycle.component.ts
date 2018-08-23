import { Component } from '@angular/core';


@Component({
  selector: 'lch-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent {

  constructor() { }
  result : number = 0; 
 
  onClick(value: number){
    this.result = value;
  }
  
}
