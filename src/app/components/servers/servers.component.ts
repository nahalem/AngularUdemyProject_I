import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus: string = "No server was created!";
  serverName: string = "";
  serverCreated: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer(): void {
    this.serverCreationStatus =
      "Server was created! Name is " + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event: any): void {
    this.serverName = event.target.value;
  }
}
