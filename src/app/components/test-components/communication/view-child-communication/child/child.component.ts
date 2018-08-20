import { Component, OnInit, ElementRef, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-viewChild-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ViewChildComponent implements OnInit {
  newServerContent: string;
  @Input() serverContentInput: ElementRef;
  @Output() makeSomeAction = new  EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  getFromParrent() : void{
    this.makeSomeAction.emit(this.serverContentInput);
  };


}
