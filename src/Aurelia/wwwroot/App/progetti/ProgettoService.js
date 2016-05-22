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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ2V0dG9TZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL3Byb2dldHRpL1Byb2dldHRvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0kseUJBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLGNBQWMsQ0FBQztRQUlyQyxDQUFDO1FBRU0sdUNBQWEsR0FBcEIsVUFBcUIsU0FBaUI7WUFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUVNLGdDQUFNLEdBQWI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBZEw7WUFBQyw4QkFBVTs7MkJBQUE7UUFnQlgsc0JBQUM7SUFBRCxDQUFDLEFBZkQsSUFlQztJQWZZLHVCQUFlLGtCQWUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHtQcm9nZXR0b30gZnJvbSAnUHJvZ2V0dG8nO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtIdHRwUmVzcG9uc2VNZXNzYWdlfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBQcm9nZXR0b1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiYXBpL3Byb2dldHRvXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGl2aUNsaWVudGUoaWRDbGllbnRlOiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL0F0dGl2aUNsaWVudGUvXCIgKyBpZENsaWVudGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhdHRpdmkoKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyBcIi9BdHRpdmlcIik7XHJcbiAgICB9XHJcblxyXG59Il19