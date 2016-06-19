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
    var Fattura, FattureService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Fattura = (function () {
                function Fattura() {
                }
                Object.defineProperty(Fattura.prototype, "NumDocumento", {
                    get: function () {
                        return this.NumFattura + "/" + this.Anno;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Fattura;
            }());
            exports_1("Fattura", Fattura);
            FattureService = (function () {
                function FattureService(http) {
                    this.http = http;
                    this._urlBase = '/api/Fattura';
                }
                FattureService.prototype.ultimoAnno = function () {
                    return this.http.get(this._urlBase + "/UltimoAnno")
                        .map(function (res) { return res.json(); });
                };
                FattureService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FattureService);
                return FattureService;
            }());
            exports_1("FattureService", FattureService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmF0dHVyZV9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3NlcnZpY2VzL2ZhdHR1cmVfc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBO2dCQUFBO2dCQWdCQSxDQUFDO2dCQUxHLHNCQUFXLGlDQUFZO3lCQUF2Qjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztvQkFDN0MsQ0FBQzs7O21CQUFBO2dCQUdMLGNBQUM7WUFBRCxDQUFDLEFBaEJELElBZ0JDO1lBaEJELDZCQWdCQyxDQUFBO1lBR0Q7Z0JBR0ksd0JBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGOUIsYUFBUSxHQUFXLGNBQWMsQ0FBQztnQkFHbEMsQ0FBQztnQkFFTSxtQ0FBVSxHQUFqQjtvQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7eUJBQzlDLEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFWTDtvQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtnQkFZYixxQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsMkNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vIE5vIG5lZWQgdG8gc3BlY2lmeSB0aGUgb3BlcmF0b3IsIGp1c3QgaW1wb3J0IGFuZCBpdCB3aWxsIGF1dG9wYXRjaFxyXG4vL2ltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy9pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbSc7XHJcblxyXG5pbXBvcnQge0NsaWVudGV9IGZyb20gJy4vY2xpZW50aV9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBGYXR0dXJhIHtcclxuICAgIHB1YmxpYyBGYXR0dXJhTm86IG51bWJlcjtcclxuICAgIHB1YmxpYyBDbGllbnRlTm86IG51bWJlcjtcclxuICAgIHB1YmxpYyBEYXRhRmF0dHVyYTogRGF0ZTtcclxuXHJcbiAgICBwdWJsaWMgTnVtRmF0dHVyYTogbnVtYmVyO1xyXG4gICAgcHVibGljIEFubm86IG51bWJlcjtcclxuICAgIHB1YmxpYyBTYWxkYXRhOiBib29sZWFuO1xyXG4gICAgcHVibGljIE5vdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyBEYXRhU2NhZGVuemE6IERhdGU7XHJcblxyXG4gICAgcHVibGljIGdldCBOdW1Eb2N1bWVudG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuTnVtRmF0dHVyYSArIFwiL1wiICsgdGhpcy5Bbm5vO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBDbGllbnRlOiBDbGllbnRlOyBcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmF0dHVyZVNlcnZpY2Uge1xyXG4gICAgX3VybEJhc2U6IHN0cmluZyA9ICcvYXBpL0ZhdHR1cmEnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bHRpbW9Bbm5vKCk6IE9ic2VydmFibGU8RmF0dHVyYVtdPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5fdXJsQmFzZSArIFwiL1VsdGltb0Fubm9cIilcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG59Il19