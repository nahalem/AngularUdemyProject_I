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
}
