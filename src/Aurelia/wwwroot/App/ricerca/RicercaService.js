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
    var RicercaService = (function () {
        function RicercaService(http) {
            this.http = http;
            this.url = "api/ricerca";
        }
        RicercaService.prototype.ricerca = function (filtro) {
            return this.http.post(this.url + "/Ricerca", filtro);
        };
        RicercaService.prototype.ricercaDiario = function (filtro) {
            return this.http.post(this.url + "/RicercaDiario", filtro);
        };
        RicercaService.prototype.riepilogo = function () {
            return this.http.get(this.url + "/Riepilogo");
        };
        RicercaService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], RicercaService);
        return RicercaService;
    }());
    exports.RicercaService = RicercaService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmljZXJjYVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvcmljZXJjYS9SaWNlcmNhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU9BO1FBR0ksd0JBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGNUIsUUFBRyxHQUFXLGFBQWEsQ0FBQztRQUlwQyxDQUFDO1FBRU0sZ0NBQU8sR0FBZCxVQUFlLE1BQXFCO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRU0sc0NBQWEsR0FBcEIsVUFBcUIsTUFBMkI7WUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVNLGtDQUFTLEdBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQWxCTDtZQUFDLDhCQUFVOzswQkFBQTtRQW9CWCxxQkFBQztJQUFELENBQUMsQUFuQkQsSUFtQkM7SUFuQlksc0JBQWMsaUJBbUIxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWx0cm9SaWNlcmNhfSBmcm9tICdyaWNlcmNhL0ZpbHRyb1JpY2VyY2EnO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtIdHRwUmVzcG9uc2VNZXNzYWdlfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtGaWx0cm9SaWNlcmNhRGlhcmlvfSBmcm9tICdyaWNlcmNhL0ZpbHRyb1JpY2VyY2FEaWFyaW8nO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIFJpY2VyY2FTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcgPSBcImFwaS9yaWNlcmNhXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByaWNlcmNhKGZpbHRybzogRmlsdHJvUmljZXJjYSk6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArIFwiL1JpY2VyY2FcIiwgZmlsdHJvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmljZXJjYURpYXJpbyhmaWx0cm86IEZpbHRyb1JpY2VyY2FEaWFyaW8pOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwgKyBcIi9SaWNlcmNhRGlhcmlvXCIsIGZpbHRybyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJpZXBpbG9nbygpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL1JpZXBpbG9nb1wiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=