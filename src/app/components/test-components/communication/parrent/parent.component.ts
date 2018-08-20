import { Component, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  data: any;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  sendMessage(event): void {
    console.log(event.value);
    console.log(this.data);
  }
}
