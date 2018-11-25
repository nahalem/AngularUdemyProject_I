import { Person, Gender } from "./../components/examples/bindings-component/models/person.model";
import { IMock } from "./mock.interface";

export class PersonMock implements IMock<Person> {

  private data: Person[] = [];

  constructor() {
    this.createMock();
  }

  private createMock(): void {
    this.data = new Array<Person>(
      new Person(
       1,
       "Johny",
       "Rambo",
       "rambo@email.com",
       Gender.Male
      )
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
