import { Person } from "./../components/components-communication/models/person.model";
import { IMock } from "./mock.interface";

export class ComponentCommunicationMock implements IMock<Person> {

  private data: Person[] = [];

  constructor() {
    this.createMock();
  }

  private createMock(): void {
    this.data = new Array<Person>(
      new Person('Johny Dick', 'johny@gmai.com', 'M', true),
      new Person('Marta Sexy', 'marta@gmai.com', 'F', true),
      new Person('Julia Porn', 'julia@gmai.com', 'F', true),
      new Person('Margareth Ass', 'margareth@gmai.com', 'F', true),
      new Person('Stephan Crazy', 'johny2@gmai.com', 'M', true),
      new Person('Marta Buli', 'marta2@gmai.com', 'F', true),
      new Person('Julia Pupa', 'julia2@gmai.com', 'F', true),
      new Person('Margareth Dupa', 'margareth2@gmai.com', 'F', true),
    );
  }

  public getMockData(): Array<Person> {
    console.log(this.data);
    return this.data;
  }

  public addMockData(item: Person): void {
    if(item === null || item === undefined)
    {
      return;
    }

    this.data.push(item);
  }
}
