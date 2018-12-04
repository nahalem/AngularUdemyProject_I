import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { Gender } from "./../../components/examples/bindings-component/models/person.model";

@Directive({
  selector: '[appSexDetection]'
})
export class SexDetectionDirective {
  hasView: boolean;

  @Input() set appSexDetection(value: Gender) {
    if (!this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef); // generalnie tutaj tworzymy element i go wywietlamy, dokłądnie ten pod który jest podczepiona nasza dyrektywa
      this.hasView = true;
    }
    //this.viewContainer.clear(); // usuwa template
    //if(!String.isPresent(value.toString()) || !String.isBlank(value.toString())){
    if (value === undefined || value === null || value === Gender.None) {
      this.renderer.setStyle(this.templateRef.elementRef.nativeElement.parentElement, 'background-color', 'red');
    }
    else {
      this.renderer.setStyle(this.templateRef.elementRef.nativeElement.parentElement, "background-color", "blue");
    }
  }

  constructor
  (
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private elementRef: ElementRef,
    private renderer: Renderer2,
) {
  this.hasView = false;
}

}
