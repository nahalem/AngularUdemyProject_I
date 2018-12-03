export class Person{
  id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Gender: Gender;

  constructor(id: number, FirstName: string, LastName: string, Email: string, Gender: Gender) {
    this.id = id;
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.Email = Email;
    this.Gender = Gender;
  }
}


export enum Gender{
  None,
  Male,
  Female
}
