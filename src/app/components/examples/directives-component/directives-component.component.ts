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


  constructor() {
    this.mock = new PersonMock();
    this.data = new Array<Person>();
  }

  ngOnInit() {
    this.data = this.mock.getMockData();
  }

}
