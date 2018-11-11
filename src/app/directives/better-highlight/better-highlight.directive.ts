import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @Input() clickedColor: string = 'green';
  @Input() data: any;


  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
    ) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event){
    console.log('@HostListener("mouseOver")');
    console.log(this.data);
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    console.log('@HostListener("mouseLeave")');
    console.log(this.data);
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');

    this.backgroundColor = this.highlightColor;
  }

  @HostListener('click') mouseClick(eventData: Event){
    console.log('@HostListener("click")');
    console.log(this.data);
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'byellowlue');

    this.backgroundColor = this.clickedColor;
  }


}
