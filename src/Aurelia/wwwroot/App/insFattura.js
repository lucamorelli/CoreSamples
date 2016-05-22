var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'fatture/Fattura', 'fatture/FatturaService'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, Fattura_1, FatturaService_1) {
    "use strict";
    var insDiario = (function () {
        function insDiario(http, fatturaService, evtAgg) {
            this.http = http;
            this.fatturaService = fatturaService;
            this.evtAgg = evtAgg;
            this.fatturaCorrente = new Fattura_1.Fattura();
        }
        insDiario.prototype.registrazione = function () {
            var _this = this;
            this.fatturaService.aggiungi(this.fatturaCorrente).then(function (value) {
                _this.evtAgg.publish('fatturaAdded');
            });
        };
        insDiario = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient, FatturaService_1.FatturaService, aurelia_event_aggregator_1.EventAggregator])
        ], insDiario);
        return insDiario;
    }());
    exports.insDiario = insDiario;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zRmF0dHVyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9pbnNGYXR0dXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUE7UUFHSSxtQkFBb0IsSUFBZ0IsRUFBVSxjQUE4QixFQUFVLE1BQXVCO1lBQXpGLFNBQUksR0FBSixJQUFJLENBQVk7WUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUN6RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO1FBQzVDLENBQUM7UUFFUyxpQ0FBYSxHQUFwQjtZQUFBLGlCQUlGO1lBSE0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUs7Z0JBQ25FLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQVpGO1lBQUMsOEJBQVU7O3FCQUFBO1FBYVgsZ0JBQUM7SUFBRCxDQUFDLEFBWkQsSUFZQztJQVpZLGlCQUFTLFlBWXJCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQge0ZhdHR1cmF9IGZyb20gJ2ZhdHR1cmUvRmF0dHVyYSc7XHJcbmltcG9ydCB7RmF0dHVyYVNlcnZpY2V9IGZyb20gJ2ZhdHR1cmUvRmF0dHVyYVNlcnZpY2UnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGluc0RpYXJpbyB7XHJcbiAgICBwdWJsaWMgZmF0dHVyYUNvcnJlbnRlOiBGYXR0dXJhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBmYXR0dXJhU2VydmljZTogRmF0dHVyYVNlcnZpY2UsIHByaXZhdGUgZXZ0QWdnOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICB0aGlzLmZhdHR1cmFDb3JyZW50ZSA9IG5ldyBGYXR0dXJhKCk7XHJcblx0fSBcclxuXHRcclxuICAgIHB1YmxpYyByZWdpc3RyYXppb25lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmF0dHVyYVNlcnZpY2UuYWdnaXVuZ2kodGhpcy5mYXR0dXJhQ29ycmVudGUpLnRoZW4oKHZhbHVlKSA9PiB7XHJcblx0XHRcdHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2ZhdHR1cmFBZGRlZCcpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59Il19