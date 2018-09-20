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

  @Output() selectedPerson = new EventEmitter<Person>();

  constructor() {
    this.persons = this.mock.getMockData();
  }

  ngOnInit() {
    console.log("list-component");
    console.log(this.persons);
  }

  onSelectedPerson(person: Person): void {
    console.log("ListComponentComponent onSelectedPerson");
    console.log(person);
    this.selectedPerson.emit(person);
  }
}
