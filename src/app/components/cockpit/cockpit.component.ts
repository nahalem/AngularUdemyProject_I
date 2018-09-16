import { Component, OnInit, Output, EventEmitter  } from "@angular/core";
import { ServerElement } from "./../server-element/models/server.element";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<ServerElement>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<ServerElement>();
  newServerName: string = "";
  newServerContent: string = "";

  constructor() {}

  ngOnInit() {}

  onAddServer(): void {
    let element = new ServerElement();
    element.name = this.newServerName;
    element.type = "server";
    element.content = this.newServerContent;
    this.serverCreated.emit(element);
  }
  onAddBlueprint(): void {
    let element = new ServerElement();
    element.name = this.newServerName;
    element.type = "blueprint";
    element.content = this.newServerContent;
    this.bluePrintCreated.emit(element);
  }
}
