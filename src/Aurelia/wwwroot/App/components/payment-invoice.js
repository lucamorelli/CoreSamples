var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'fatture/FatturaService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, FatturaService_1) {
    "use strict";
    var paymentInvoice = (function () {
        function paymentInvoice(fattureService) {
            var _this = this;
            this.fattureService = fattureService;
            this.fatture = [];
            this.fattureService.ultimoAnno()
                .then(function (response) {
                _this.fatture = response.content;
            });
        }
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], paymentInvoice.prototype, "fatturaCorrente", void 0);
        paymentInvoice = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [FatturaService_1.FatturaService])
        ], paymentInvoice);
        return paymentInvoice;
    }());
    exports.paymentInvoice = paymentInvoice;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1pbnZvaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbXBvbmVudHMvcGF5bWVudC1pbnZvaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBT0E7UUFLSSx3QkFBb0IsY0FBOEI7WUFMdEQsaUJBV0M7WUFOdUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1lBSGxELFlBQU8sR0FBYyxFQUFFLENBQUM7WUFJcEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7aUJBQzNCLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLE9BQU8sR0FBYyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQVBEO1lBQUMsNEJBQVE7OytEQUFBO1FBSmI7WUFBQyw4QkFBVTs7MEJBQUE7UUFZWCxxQkFBQztJQUFELENBQUMsQUFYRCxJQVdDO0lBWFksc0JBQWMsaUJBVzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0IHtGYXR0dXJhfSBmcm9tICdmYXR0dXJlL0ZhdHR1cmEnO1xyXG5pbXBvcnQge0ZhdHR1cmFTZXJ2aWNlfSBmcm9tICdmYXR0dXJlL0ZhdHR1cmFTZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBwYXltZW50SW52b2ljZSB7XHJcblxyXG4gICAgZmF0dHVyZTogRmF0dHVyYVtdID0gW107XHJcbiAgICBAYmluZGFibGUgZmF0dHVyYUNvcnJlbnRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmYXR0dXJlU2VydmljZTogRmF0dHVyYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmZhdHR1cmVTZXJ2aWNlLnVsdGltb0Fubm8oKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZhdHR1cmUgPSA8RmF0dHVyYVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19