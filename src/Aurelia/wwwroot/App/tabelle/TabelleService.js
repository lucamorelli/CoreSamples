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
    var TabelleService = (function () {
        function TabelleService(http) {
            this.http = http;
            this.url = "api/Tabelle/";
        }
        TabelleService.prototype.getTipiAttivita = function () {
            return this.http.get(this.url + "TipiAttivita");
        };
        TabelleService.prototype.getTecnologieAttive = function () {
            return this.http.get(this.url + "TecnologieAttive");
        };
        TabelleService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], TabelleService);
        return TabelleService;
    }());
    exports.TabelleService = TabelleService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiZWxsZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvdGFiZWxsZS9UYWJlbGxlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBR0ksd0JBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLGNBQWMsQ0FBQztRQUlyQyxDQUFDO1FBRU0sd0NBQWUsR0FBdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxjQUFjLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBRU0sNENBQW1CLEdBQTFCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBZEw7WUFBQyw4QkFBVTs7MEJBQUE7UUFnQlgscUJBQUM7SUFBRCxDQUFDLEFBZkQsSUFlQztJQWZZLHNCQUFjLGlCQWUxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7SHR0cFJlc3BvbnNlTWVzc2FnZX0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgVGFiZWxsZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiYXBpL1RhYmVsbGUvXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9IFxyXG5cclxuICAgIHB1YmxpYyBnZXRUaXBpQXR0aXZpdGEoKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiVGlwaUF0dGl2aXRhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUZWNub2xvZ2llQXR0aXZlKCk6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCJUZWNub2xvZ2llQXR0aXZlXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==