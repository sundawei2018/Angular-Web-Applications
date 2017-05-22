import { Directive,
        Input, 
        Renderer2, 
        OnInit, 
        ElementRef,
        HostListener, 
        HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

    @HostListener('mouseenter') mouseover(eventDate: Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
      this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') mouseleave(eventDate: Event) {
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
      this.backgroundColor = this.defaultColor;
    }

}
