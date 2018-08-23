import { Component, Output, EventEmitter, Input, OnInit,
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy } from '@angular/core';

@Component({
  selector: 'lch-event-binding',
  template: `
  {{data}}
  <button (click)="onClick()">Change Result</button>
  `,
  styles: []
})
export class EventBindingComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() data : number;
  @Output() dateSent = new EventEmitter<number>();

  onClick(){
    this.dateSent.emit(this.data+20);
  }

  ngOnInit() {
    this.log("In OnInit")
  }

  ngOnChanges(){
    this.log("In OnChanges")
  }

  ngDoCheck(){
    this.log("In OnDoCheck")
  }

  ngAfterContentInit(){
    this.log("In AfterContentInit")
  }

  ngAfterContentChecked(){
    this.log("In AfterContentChecked")
  }

  ngAfterViewInit(){
    this.log("In AfterViewInit")
  }
  
  ngAfterViewChecked(){
    this.log("In AfterViewChecked")
  }

  ngOnDestroy(){
    this.log("In OnDestroy")
  }

  log(value: string){
    console.log(value);
  }  


}
