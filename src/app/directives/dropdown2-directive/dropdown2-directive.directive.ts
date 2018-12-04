import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown2]'
})
export class Dropdown2DirectiveDirective {
  @HostBinding ('class.open') isOpen = false;

  @HostListener('click') mouseClick(eventData: Event){
    this.isOpen = !this.isOpen;
  }

}
