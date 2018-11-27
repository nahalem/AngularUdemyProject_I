import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef } from '@angular/core';
import { Gender } from "./../../components/examples/bindings-component/models/person.model";

@Directive({
  selector: '[appSexDetection]'
})
export class SexDetectionDirective {
  @Input() set appSexDetection(value: Gender) {
    if(value === 1){
     // this.viewContainer.createEmbeddedView(this.templateRef);
      console.log('facet');
      // console.log(this.templateRef);
      // console.log(this.viewContainer);
    }
    else{
      //this.viewContainer.clear();
      console.log('kobieta');
    }
  }

  constructor
  (
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef
  )
    { }

}
