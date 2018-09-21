import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { ComponentCommunicationMock } from "./../../../mocks/component.communication.mock";
import { Person } from "./../models/person.model";

@Component({
  selector: "app-list-component",
  templateUrl: "./list-component.component.html",
  styleUrls: ["./list-component.component.css"]
})
export class ListComponentComponent implements OnInit {
  persons: Person[] = [];
  mock = new ComponentCommunicationMock();
  currentSelectedPerson: Person;

  @Output() selectedPerson = new EventEmitter<Person>();

  constructor() {
    this.persons = this.mock.getMockData();
  }

  ngOnInit() {
    console.log("ListComponentComponent ngOnInit");
    console.log(this.persons);
  }

  onSelectedPerson(person: Person): void {
    console.log("ListComponentComponent onSelectedPerson");
    console.log('person');
    console.log(person);
    this.currentSelectedPerson = person;
    console.log('currentSelectedPerson');
    console.log(this.currentSelectedPerson);
    this.selectedPerson.emit(person);
  }
}
