﻿import {Directive, ElementRef} from '@angular/core';
// Simple example directive that fixes autofocus problem with multiple views 
@Directive({
    selector: '[autofocus]' // using [ ] means selecting attributes 
})
export class Autofocus {
    constructor(public el: ElementRef) {  
        // autofocus fix for multiple views 
        this.el.nativeElement.focus();
    }
} 
 