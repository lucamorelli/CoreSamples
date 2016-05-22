System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var XLarge;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Simple example directive that should be in `/directives` folder 
            // Todo: refactor 
            XLarge = (function () {
                function XLarge(el) {
                    this.el = el;
                    // simple dom manipulation to set font size to x-large 
                    this.el.nativeElement.style.fontSize = 'x-large';
                }
                XLarge = __decorate([
                    core_1.Directive({
                        selector: '[x-large]' // using [ ] means selecting attributes 
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], XLarge);
                return XLarge;
            }());
            exports_1("XLarge", XLarge);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiWExhcmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2RpcmVjdGl2ZXMvWExhcmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUEsbUVBQW1FO1lBQ25FLGtCQUFrQjtZQUlsQjtnQkFDSSxnQkFBbUIsRUFBYztvQkFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO29CQUM3Qix1REFBdUQ7b0JBQ3ZELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO2dCQUNyRCxDQUFDO2dCQVBMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFdBQVcsQ0FBQyx3Q0FBd0M7cUJBQ2pFLENBQUM7OzBCQUFBO2dCQU1GLGFBQUM7WUFBRCxDQUFDLEFBTEQsSUFLQztZQUxELDJCQUtDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vLyBTaW1wbGUgZXhhbXBsZSBkaXJlY3RpdmUgdGhhdCBzaG91bGQgYmUgaW4gYC9kaXJlY3RpdmVzYCBmb2xkZXIgXHJcbi8vIFRvZG86IHJlZmFjdG9yIFxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW3gtbGFyZ2VdJyAvLyB1c2luZyBbIF0gbWVhbnMgc2VsZWN0aW5nIGF0dHJpYnV0ZXMgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBYTGFyZ2Uge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7ICBcclxuICAgICAgICAvLyBzaW1wbGUgZG9tIG1hbmlwdWxhdGlvbiB0byBzZXQgZm9udCBzaXplIHRvIHgtbGFyZ2UgXHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gJ3gtbGFyZ2UnO1xyXG4gICAgfVxyXG59IFxyXG4iXX0=