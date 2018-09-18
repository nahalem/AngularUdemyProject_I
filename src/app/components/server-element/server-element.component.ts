import { Component, OnInit, Input, Output, ViewEncapsulation, SimpleChange, ViewChild,  ElementRef, ContentChild } from '@angular/core';
import { ServerElement } from "./models/server.element";
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: ServerElement;
  @Input('name') name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    this.element = new ServerElement();
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChange): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('ngOnChanges called! ');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph: ' + console.log(this.paragraph.nativeElement.textContent));
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('ngDoCheck called!');

  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph: ' + console.log(this.paragraph.nativeElement.textContent));
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('ngOnDestroy called!');
  }

}
