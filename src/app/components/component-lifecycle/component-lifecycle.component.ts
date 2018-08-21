import { Component, OnInit, OnChanges } from "@angular/core";

@Component({
  selector: "app-component-lifecycle",
  templateUrl: "./component-lifecycle.component.html",
  styleUrls: ["./component-lifecycle.component.css"]
})
export class ComponentLifecycleComponent implements OnInit, OnChanges {
  lifecycle: boolean;

  constructor() {
    this.lifecycle = true;
  }

  ngOnChanges() {
    console.log("ngOnChange()");
    console.log(this.lifecycle);
  }

  ngOnInit() {
    // odpala się w momencie renderowania strony
    console.log("ngOnInit()");
    console.log(this.lifecycle);
  }

  ngDoCheck() {
    // metoda odpala się z każdą zmianą wartoci zmiennej abindowanej na widoku.
    console.log("ngDoCheck()");
    console.log(this.lifecycle);
  }

  ngAfterContentInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("ngAfterContentInit()");
    console.log(this.lifecycle);
  }

  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    console.log("ngAfterViewInit()");
    console.log(this.lifecycle);
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("ngAfterViewChecked()");
    console.log(this.lifecycle);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("ngOnDestroy()");
    console.log(this.lifecycle);

  }
}
