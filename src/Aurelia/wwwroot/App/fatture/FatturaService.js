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
    var FatturaService = (function () {
        function FatturaService(http) {
            this.http = http;
            this.url = "api/fattura";
        }
        FatturaService.prototype.ultimoAnno = function () {
            return this.http.get(this.url + "/UltimoAnno");
        };
        FatturaService.prototype.aggiungi = function (fattura) {
            fattura.FatturaNo = 0;
            if (fattura.Saldata == undefined)
                fattura.Saldata = false;
            return this.http.post(this.url, fattura);
        };
        FatturaService.prototype.fattureRecenti = function (recordNumber) {
            return this.http.get(this.url + "/ultime/" + recordNumber);
        };
        FatturaService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], FatturaService);
        return FatturaService;
    }());
    exports.FatturaService = FatturaService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF0dHVyYVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvZmF0dHVyZS9GYXR0dXJhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0ksd0JBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGNUIsUUFBRyxHQUFXLGFBQWEsQ0FBQztRQUlwQyxDQUFDO1FBRU0sbUNBQVUsR0FBakI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRU0saUNBQVEsR0FBZixVQUFnQixPQUFnQjtZQUM1QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUN0QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVNLHVDQUFjLEdBQXJCLFVBQXNCLFlBQW9CO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBckJMO1lBQUMsOEJBQVU7OzBCQUFBO1FBd0JYLHFCQUFDO0lBQUQsQ0FBQyxBQXZCRCxJQXVCQztJQXZCWSxzQkFBYyxpQkF1QjFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZhdHR1cmF9IGZyb20gJ0ZhdHR1cmEnO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtIdHRwUmVzcG9uc2VNZXNzYWdlfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBGYXR0dXJhU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybDogc3RyaW5nID0gXCJhcGkvZmF0dHVyYVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdWx0aW1vQW5ubygpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL1VsdGltb0Fubm9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFnZ2l1bmdpKGZhdHR1cmE6IEZhdHR1cmEpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICBmYXR0dXJhLkZhdHR1cmFObyA9IDA7XHJcbiAgICAgICAgaWYgKGZhdHR1cmEuU2FsZGF0YSA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGZhdHR1cmEuU2FsZGF0YSA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCwgZmF0dHVyYSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZhdHR1cmVSZWNlbnRpKHJlY29yZE51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyBcIi91bHRpbWUvXCIgKyByZWNvcmROdW1iZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXX0=