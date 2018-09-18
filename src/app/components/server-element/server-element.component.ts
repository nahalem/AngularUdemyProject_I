import { Component, OnInit, Input, Output, ViewEncapsulation } from '@angular/core';
import { ServerElement } from "./models/server.element";
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: ServerElement;

  constructor() {
    this.element = new ServerElement();
  }

  ngOnInit() {
  }

}
