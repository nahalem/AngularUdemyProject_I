import { Component, OnInit, EventEmitter, Input } from "@angular/core";
import { Person } from "./../models/person.model";

@Component({
  selector: "app-item-component",
  templateUrl: "./item-component.component.html",
  styleUrls: ["./item-component.component.css"]
})
export class ItemComponentComponent implements OnInit {
  @Input() person: Person;

  constructor() {

  }

  ngOnInit() {}

  ngDoCheck(): void {
    console.log("ItemComponentComponent ngDoCheck");
    if(this.person === undefined){
      this.person = new Person('','','',false);
    }
    console.log(this.person);
  }
}
