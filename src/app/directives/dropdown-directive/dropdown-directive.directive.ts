import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirectiveDirective {
  isOpened: boolean;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
    ) {
      this.isOpened = false;
    }

  @HostListener('click') mouseClick(eventData: Event){
      if(this.isOpened){
        this.isOpened = false;
        this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      }
      else{
        this.renderer.addClass(this.elementRef.nativeElement, 'open');
        this.isOpened = true;
      }
    }
}
