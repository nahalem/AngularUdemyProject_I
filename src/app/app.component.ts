import { Component } from "@angular/core";
import { ServerElement } from "./components/server-element/models/server.element";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements: Array<ServerElement>;

  constructor() {
    this.serverElements = new Array<ServerElement>();
    let element = new ServerElement();
    element.name = "Test";
    element.type = "server";
    element.content = "Content server";
    this.serverElements.push(element);
  }

  onServerAdded(serverData: ServerElement): void {
    let element = new ServerElement();
    element.name = serverData.name;
    element.type = "server";
    element.content = serverData.content;
    this.serverElements.push(element);
  }

  onBlueprintAdded(bluePrintData: ServerElement): void {
    let element = new ServerElement();
    element.name = bluePrintData.name;
    element.type = "blueprint";
    element.content = bluePrintData.content;
    this.serverElements.push(element);
  }
}
