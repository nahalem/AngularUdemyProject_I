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
  servers: Array<string>;

  offlineServersCount: number;
  onlineServersCount: number;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000);

    this.servers = new Array<string>();
    this.servers.push("Test Server 1");
    this.servers.push("Test Server 2");

    this.onlineServersCount = 0;
    this.offlineServersCount = 0;
  }

  ngOnInit() {}

  onCreateServer(): void {
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any): void {
    this.serverName = event.target.value;
  }
}
