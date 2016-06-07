System.register(['@angular/core', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var Cliente, Locazione, ClientiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Cliente = (function () {
                function Cliente() {
                }
                return Cliente;
            }());
            exports_1("Cliente", Cliente);
            Locazione = (function () {
                function Locazione() {
                }
                return Locazione;
            }());
            exports_1("Locazione", Locazione);
            // https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/
            ClientiService = (function () {
                function ClientiService(http) {
                    this.http = http;
                    this._urlBase = '/api/Cliente';
                }
                ClientiService.prototype.lista = function () {
                    return this.http.get(this._urlBase + "/Lista")
                        .map(function (res) { return res.json(); });
                };
                ClientiService.prototype.locazioni = function (idCliente) {
                    return this.http.get(this._urlBase + "/Locazioni/" + idCliente)
                        .map(function (res) { return res.json(); });
                };
                ClientiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ClientiService);
                return ClientiService;
            }());
            exports_1("ClientiService", ClientiService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50aV9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3NlcnZpY2VzL2NsaWVudGlfc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtBO2dCQUFBO2dCQUdBLENBQUM7Z0JBQUQsY0FBQztZQUFELENBQUMsQUFIRCxJQUdDO1lBSEQsNkJBR0MsQ0FBQTtZQUVEO2dCQUFBO2dCQUlDLENBQUM7Z0JBQUQsZ0JBQUM7WUFBRCxDQUFDLEFBSkYsSUFJRTtZQUpGLGlDQUlFLENBQUE7WUFHRix3RUFBd0U7WUFFeEU7Z0JBR0ksd0JBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGOUIsYUFBUSxHQUFXLGNBQWMsQ0FBQztnQkFHbEMsQ0FBQztnQkFFTSw4QkFBSyxHQUFaO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzt5QkFFekMsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUVNLGtDQUFTLEdBQWhCLFVBQWlCLFNBQWlCO29CQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLEdBQUcsU0FBUyxDQUFDO3lCQUMxRCxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBaEJMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQWtCYixxQkFBQztZQUFELENBQUMsQUFqQkQsSUFpQkM7WUFqQkQsMkNBaUJDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRlIHtcclxuICAgIENsaWVudGVObzogbnVtYmVyO1xyXG4gICAgRGVzY3JpemlvbmU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2F6aW9uZSB7XHJcbiAgICBwdWJsaWMgTG9jYXppb25lTm86IG51bWJlcjtcclxuICAgIHB1YmxpYyBEZXNjcml6aW9uZTogc3RyaW5nO1xyXG4gICAgcHVibGljIENsaWVudGVObzogbnVtYmVyO1xyXG4gfVxyXG5cclxuXHJcbi8vIGh0dHBzOi8vYXV0aDAuY29tL2Jsb2cvMjAxNS8xMC8xNS9hbmd1bGFyLTItc2VyaWVzLXBhcnQtMy11c2luZy1odHRwL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbGllbnRpU2VydmljZSB7IFxyXG4gICAgX3VybEJhc2U6IHN0cmluZyA9ICcvYXBpL0NsaWVudGUnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsaXN0YSgpOiBPYnNlcnZhYmxlPENsaWVudGVbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX3VybEJhc2UgKyBcIi9MaXN0YVwiKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgIC5tYXAoIHJlcyA9PiByZXMudGV4dCgpKVxyXG4gICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9jYXppb25pKGlkQ2xpZW50ZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxMb2NhemlvbmVbXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX3VybEJhc2UgKyBcIi9Mb2NhemlvbmkvXCIgKyBpZENsaWVudGUpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==