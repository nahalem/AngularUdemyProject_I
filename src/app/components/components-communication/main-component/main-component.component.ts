import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Person } from "./../models/person.model";

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  person: Person;

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('MainComponentComponent ngDoCheck');
    console.log(this.person);
  };

  selectedPerson(person: Person) : void{
    console.log('MainComponentComponent selectedPerson');
    this.person = person;
    console.log(this.person);
  };

}
