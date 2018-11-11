import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector : "[appBasicHiglight]"
})

export class BasicHiglightDirective implements OnInit{
  constructor(
    private elementRef: ElementRef
    ){}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
