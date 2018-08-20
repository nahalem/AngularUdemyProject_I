import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() @Output() data: any;
    @Output() messageEvent = new EventEmitter<any>();
    message: string;

    constructor(
    ) {
      this.message = '';
    }

    ngOnInit() {
    }

   receiveMessage(): void{
    console.log('Child component');
    this.messageEvent.emit(this.data);
    if (this.data === null || this.data === "" || this.data === undefined) {
      return;
    }

    switch (Number(this.data)) {
      case 1:
      case 2:
      case 3:
      case 4:
      this.message = 'Message ' + this.data;
        break;
      default:
       this.message = 'No message to convert.';
      break;
    }
   };
}
