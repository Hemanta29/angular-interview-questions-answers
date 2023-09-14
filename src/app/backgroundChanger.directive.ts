import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[backgroundChanger]',
})
export class BackgroundChangerDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'Yellow';
  }
}
