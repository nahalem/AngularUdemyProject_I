import { Component, OnInit, Input } from "@angular/core";
import { Logs } from "./models/console.model";

@Component({
  selector: "app-console",
  templateUrl: "./console.component.html",
  styleUrls: ["./console.component.css"]
})
export class ConsoleComponent implements OnInit {
  @Input()
  data: any;
  logColor: string;
  isLogVisible: boolean;
  log: Logs;
  Logs: Array<Logs>;
  clickCounter: number;

  constructor() {
    this.isLogVisible = true;
    this.logColor = "transparent";
    this.clickCounter = 0;
  }

  ngOnInit() {
    this.log = new Logs();
    this.Logs = new Array<Logs>();
  }

  ngAfterViewChecked() {
    // metoda odpala się z każdą zmianą wartoci zmiennej abindowanej na widoku.
    this.log = new Logs();
    this.log.dateRegister = new Date();
    this.log.eventLog = "N/A";
    this.log.clickCounter = this.clickCounter++;
    this.log.logMessage = this.data.toString();
    this.log.isExpanded = true;
    this.logColor = "black";

    console.log(this.Logs);
    this.Logs.push(this.log);
  }

  expandLog(event: any, log: Logs): void {
    if (log.isExpanded) {
      log.isExpanded = false;
    } else {
      log.isExpanded = true;
    }
  }

  removeLog(log: Logs): void {
    const index: number = this.Logs.indexOf(log);
    this.Logs.splice(index, 1);
    if (this.Logs.length === 0) {
      this.isLogVisible = false;
    }
  }
}
