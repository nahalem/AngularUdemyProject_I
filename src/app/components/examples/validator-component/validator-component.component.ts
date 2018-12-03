import { Component, OnInit } from '@angular/core';
import { PersonMock } from "./../../../mocks/person.mock";
import { Person, Gender } from "./../../../components/examples/bindings-component/models/person.model";

@Component({
  selector: 'app-validator-component',
  templateUrl: './validator-component.component.html',
  styleUrls: ['./validator-component.component.css']
})
export class ValidatorComponentComponent implements OnInit {
  data: Array<Person>;
  mock: PersonMock;
  person: Person;

  constructor() {
    this.mock = new PersonMock();
    this.data = new Array<Person>();
    this.person = new Person(0,'','','', Gender.None);
  }

  ngOnInit() {
    this.data = this.mock.getMockData();
  }

}
