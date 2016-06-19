var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client'], function (require, exports, aurelia_framework_1, aurelia_http_client_1) {
    "use strict";
    var PreventivoService = (function () {
        function PreventivoService(http) {
            this.http = http;
            this.url = "api/preventivo";
        }
        PreventivoService.prototype.ultimoAnno = function () {
            return this.http.get(this.url + "/UltimoAnno");
        };
        PreventivoService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], PreventivoService);
        return PreventivoService;
    }());
    exports.PreventivoService = PreventivoService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmVudGl2b1NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvcHJldmVudGl2aS9QcmV2ZW50aXZvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0ksMkJBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLGdCQUFnQixDQUFDO1FBSXZDLENBQUM7UUFFTSxzQ0FBVSxHQUFqQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFWTDtZQUFDLDhCQUFVOzs2QkFBQTtRQVlYLHdCQUFDO0lBQUQsQ0FBQyxBQVhELElBV0M7SUFYWSx5QkFBaUIsb0JBVzdCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1ByZXZlbnRpdm99IGZyb20gJ1ByZXZlbnRpdm8nO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtIdHRwUmVzcG9uc2VNZXNzYWdlfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBQcmV2ZW50aXZvU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybDogc3RyaW5nID0gXCJhcGkvcHJldmVudGl2b1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bHRpbW9Bbm5vKCk6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvVWx0aW1vQW5ub1wiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=