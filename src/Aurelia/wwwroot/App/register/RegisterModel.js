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
    var ProgettoService = (function () {
        function ProgettoService(http) {
            this.http = http;
            this.url = "api/progetto";
        }
        ProgettoService.prototype.attiviCliente = function (idCliente) {
            return this.http.get(this.url + "/AttiviCliente/" + idCliente);
        };
        ProgettoService.prototype.attivi = function () {
            return this.http.get(this.url + "/Attivi");
        };
        ProgettoService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], ProgettoService);
        return ProgettoService;
    }());
    exports.ProgettoService = ProgettoService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9yZWdpc3Rlci9SZWdpc3Rlck1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFHSSx5QkFBbUIsSUFBZ0I7WUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUYzQixRQUFHLEdBQVcsY0FBYyxDQUFDO1FBSXJDLENBQUM7UUFFTSx1Q0FBYSxHQUFwQixVQUFxQixTQUFpQjtZQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBRU0sZ0NBQU0sR0FBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFkTDtZQUFDLDhCQUFVOzsyQkFBQTtRQWdCWCxzQkFBQztJQUFELENBQUMsQUFmRCxJQWVDO0lBZlksdUJBQWUsa0JBZTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2dldHRvfSBmcm9tICdQcm9nZXR0byc7XHJcbmltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQge0h0dHBSZXNwb25zZU1lc3NhZ2V9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIFByb2dldHRvU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHVybDogc3RyaW5nID0gXCJhcGkvcHJvZ2V0dG9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXR0aXZpQ2xpZW50ZShpZENsaWVudGU6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvQXR0aXZpQ2xpZW50ZS9cIiArIGlkQ2xpZW50ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGl2aSgpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL0F0dGl2aVwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=