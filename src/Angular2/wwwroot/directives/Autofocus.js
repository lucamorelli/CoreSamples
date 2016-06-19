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
    var Autofocus;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // Simple example directive that fixes autofocus problem with multiple views 
            Autofocus = (function () {
                function Autofocus(el) {
                    this.el = el;
                    // autofocus fix for multiple views 
                    this.el.nativeElement.focus();
                }
                Autofocus = __decorate([
                    core_1.Directive({
                        selector: '[autofocus]' // using [ ] means selecting attributes 
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Autofocus);
                return Autofocus;
            }());
            exports_1("Autofocus", Autofocus);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0b2ZvY3VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2RpcmVjdGl2ZXMvQXV0b2ZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBQ0EsNkVBQTZFO1lBSTdFO2dCQUNJLG1CQUFtQixFQUFjO29CQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7b0JBQzdCLG9DQUFvQztvQkFDcEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xDLENBQUM7Z0JBUEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYSxDQUFDLHdDQUF3QztxQkFDbkUsQ0FBQzs7NkJBQUE7Z0JBTUYsZ0JBQUM7WUFBRCxDQUFDLEFBTEQsSUFLQztZQUxELGlDQUtDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIFNpbXBsZSBleGFtcGxlIGRpcmVjdGl2ZSB0aGF0IGZpeGVzIGF1dG9mb2N1cyBwcm9ibGVtIHdpdGggbXVsdGlwbGUgdmlld3MgXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbYXV0b2ZvY3VzXScgLy8gdXNpbmcgWyBdIG1lYW5zIHNlbGVjdGluZyBhdHRyaWJ1dGVzIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2ZvY3VzIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZikgeyAgXHJcbiAgICAgICAgLy8gYXV0b2ZvY3VzIGZpeCBmb3IgbXVsdGlwbGUgdmlld3MgXHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbn0gXHJcbiAiXX0=