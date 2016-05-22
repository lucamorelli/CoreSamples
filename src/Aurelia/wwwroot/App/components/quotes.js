var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', '../preventivi/Preventivo', '../preventivi/PreventivoService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, Preventivo_1, PreventivoService_1) {
    "use strict";
    var quotes = (function () {
        function quotes(preventivoService) {
            var _this = this;
            this.preventivoService = preventivoService;
            this.preventivi = [];
            this.preventivoService.ultimoAnno()
                .then(function (response) {
                _this.preventivi = response.content;
            });
        }
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Preventivo_1.Preventivo)
        ], quotes.prototype, "preventivoCorrente", void 0);
        quotes = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [PreventivoService_1.PreventivoService])
        ], quotes);
        return quotes;
    }());
    exports.quotes = quotes;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVvdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbXBvbmVudHMvcXVvdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBT0E7UUFPSSxnQkFBb0IsaUJBQW9DO1lBUDVELGlCQWdCQztZQVR1QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1lBSnhELGVBQVUsR0FBaUIsRUFBRSxDQUFDO1lBSzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUU7aUJBQzlCLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLFVBQVUsR0FBaUIsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNyRCxDQUFDLENBQUMsQ0FBQztRQUVYLENBQUM7UUFSRDtZQUFDLDRCQUFROzswREFBQTtRQU5iO1lBQUMsOEJBQVU7O2tCQUFBO1FBaUJYLGFBQUM7SUFBRCxDQUFDLEFBaEJELElBZ0JDO0lBaEJZLGNBQU0sU0FnQmxCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0IHtQcmV2ZW50aXZvfSBmcm9tICcuLi9wcmV2ZW50aXZpL1ByZXZlbnRpdm8nO1xyXG5pbXBvcnQge1ByZXZlbnRpdm9TZXJ2aWNlfSBmcm9tICcuLi9wcmV2ZW50aXZpL1ByZXZlbnRpdm9TZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBxdW90ZXMge1xyXG5cclxuXHJcbiAgICBwcmV2ZW50aXZpOiBQcmV2ZW50aXZvW10gPSBbXTtcclxuXHJcbiAgICBAYmluZGFibGUgcHJldmVudGl2b0NvcnJlbnRlOiBQcmV2ZW50aXZvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJldmVudGl2b1NlcnZpY2U6IFByZXZlbnRpdm9TZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wcmV2ZW50aXZvU2VydmljZS51bHRpbW9Bbm5vKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2ZW50aXZpID0gPFByZXZlbnRpdm9bXT5yZXNwb25zZS5jb250ZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==