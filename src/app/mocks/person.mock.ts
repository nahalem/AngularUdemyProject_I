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
      ),
      new Person(
        2,
        "Monika",
        "Sexy",
        "monika@email.com",
        Gender.Female
       ),
       new Person(
        3,
        "Mark",
        "Spencer",
        "mark@email.com",
        Gender.Male
       ),
       new Person(
         4,
         "Katarzyna",
         "Ogórek",
         "kasiorka@email.com",
         Gender.Female
        )
    );
  }

  public getMockData(): Array<Person> {
    console.log('getMockData()');
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
