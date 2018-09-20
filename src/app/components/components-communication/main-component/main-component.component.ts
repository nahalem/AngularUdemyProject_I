import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Person } from "./../models/person.model";

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  @Input() @Output() person: Person;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('MainComponentComponent ngDoCheck');

  };

  selectedPerson(person: Person) : void{
    console.log('MainComponentComponent selectedPerson');
    this.person = person;
    console.log(this.person);
  };

}
