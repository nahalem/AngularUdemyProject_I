export class Person{
  name: string;
  email: string;
  gender: string;
  isAdmin: boolean;

  constructor(name: string, email: string, gender: string, isAdmin: boolean){
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.isAdmin = isAdmin;
  }
}
