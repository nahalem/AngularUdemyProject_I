import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewChild-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ViewChildParentComponent implements OnInit {
  newServerContent: string;
  @ViewChild('serverContentInput')  serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  makeSomeAction() : void{
    console.log(this.serverContentInput);
  };

}
