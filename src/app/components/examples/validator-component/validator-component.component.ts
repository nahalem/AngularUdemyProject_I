import { Component, OnInit } from '@angular/core';
import { PersonMock } from "./../../../mocks/person.mock";
import { Person, Gender } from "./../../../components/examples/bindings-component/models/person.model";
import {SelectItem} from 'primeng/primeNg';

@Component({
  selector: 'app-validator-component',
  templateUrl: './validator-component.component.html',
  styleUrls: ['./validator-component.component.css']
})
export class ValidatorComponentComponent implements OnInit {
  data: Array<Person>;
  mock: PersonMock;
  person: Person;
  selectedGender: SelectItem[];

  constructor() {
    this.mock = new PersonMock();
    this.data = new Array<Person>();
    this.person = new Person(0,'','','', Gender.None);

  }

  ngOnInit() {
    this.data = this.mock.getMockData();
    this.person.Gender = this.data[0].Gender;
  }

}
