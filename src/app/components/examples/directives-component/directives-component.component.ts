import { Component, OnInit } from '@angular/core';
import { PersonMock } from "./../../../mocks/person.mock";
import { Person, Gender } from "./../../../components/examples/bindings-component/models/person.model";

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives-component.component.html',
  styleUrls: ['./directives-component.component.css']
})
export class DirectivesComponentComponent implements OnInit {
  data: Array<Person>;
  mock: PersonMock;
  person: Person;

  liczba1: number;
  liczba2: number;
  wynik: number;


  constructor() {
    this.mock = new PersonMock();
    this.data = new Array<Person>();




  }

  ngOnInit() {
    this.data = this.mock.getMockData();
    this.person = this.data[0];

    this.liczba1 = 234;
    this.liczba2 = 12;
    this.wynik = this.liczba1 + this.liczba2;
  }

}
