import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Person } from "./../models/person.model";

@Component({
  selector: "app-item-component",
  templateUrl: "./item-component.component.html",
  styleUrls: ["./item-component.component.css"]
})
export class ItemComponentComponent implements OnInit {
  @Input() person: Person;
  genderName: string;

  constructor() {

  }

  ngOnInit() {}

  ngDoCheck(): void {
    console.log("ItemComponentComponent ngDoCheck");
    if(this.person === undefined){
      this.person = new Person('','','',false);
    }
    console.log(this.person);

    this.setGenderName(this.person.gender);
  }

  setGenderName(gender: string) : void{
      switch (gender) {
        case 'M':
        this.genderName = "Male";
          break;
        case 'F':
        this.genderName = "Female";
        break;
        default:
          break;
      }
  };
}
