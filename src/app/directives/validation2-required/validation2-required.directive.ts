import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';
import { isNavigationCancelingError } from '@angular/router/src/shared';

@Directive({
  selector: '[appValidation2Required]'
})
export class Validation2RequiredDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
    ) {}

    // @HostListener('mouseenter') mouseOver(eventData: Event){
    //   console.log('@HostListener("mouseOver")');
    //   let inputValue = this.elementRef.nativeElement.value;
    //   console.log(inputValue);
    //   if(!this.validateRequire(inputValue))
    //     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    //   else
    //     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // }

    // @HostListener('mouseleave') mouseLeave(eventData: Event){
    //   console.log('@HostListener("mouseLeave")');
    //   let inputValue = this.elementRef.nativeElement.value;
    //   console.log(inputValue);
    //   if(!this.validateRequire(inputValue))
    //   this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    //   else
    //     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // }

    // @HostListener('click') mouseClick(eventData: Event){
    //   console.log('@HostListener("click")');
    //   let inputValue = this.elementRef.nativeElement.value;
    //   console.log(inputValue);
    //   if(!this.validateRequire(inputValue))
    //     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    //   else
    //     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // }

    @HostListener('keypress') keyPress(eventData: Event){
      console.log('@HostListener("keypress")');
      let inputValue = this.elementRef.nativeElement.value;
      console.log(inputValue);
      if(!this.validateRequire(inputValue))
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
      else
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

    @HostListener('keyUp') keyUp(eventData: Event){
      console.log('@HostListener("keyUp")');
      let inputValue = this.elementRef.nativeElement.value;
      if(!this.validateRequire(inputValue))
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
      else
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }

    @HostListener('focusout') focusOut(eventData: Event){
      console.log('@HostListener("keyUp")');
      let inputValue = this.elementRef.nativeElement.value;
      if(!this.validateRequire(inputValue))
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
      else
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    }


    validateRequire(inputValue: string) : boolean{
      let isValid: boolean = false;
      let currentValue = inputValue.toString();

      if (currentValue !== '') {
        isValid = true;
      }

      return isValid;
    };

}
