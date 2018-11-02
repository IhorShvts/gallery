import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[Highlight]'
})
export class HighlightDirective {
    @Input() Highlight: string;

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.hightLight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hightLight(null);
    }

    private  hightLight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
