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
    var TipoAttivita, TabelleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            // No need to specify the operator, just import and it will autopatch
            //import 'rxjs/add/operator/map';
            //import 'rxjs/add/observable/from';
            TipoAttivita = (function () {
                function TipoAttivita() {
                }
                return TipoAttivita;
            }());
            exports_1("TipoAttivita", TipoAttivita);
            TabelleService = (function () {
                function TabelleService(http) {
                    this.http = http;
                    this._urlBase = '/api/Tabelle';
                }
                TabelleService.prototype.getTipiAttivita = function () {
                    return this.http.get(this._urlBase + "/TipiAttivita")
                        .map(function (res) { return res.json(); });
                };
                TabelleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TabelleService);
                return TabelleService;
            }());
            exports_1("TabelleService", TabelleService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiZWxsZV9zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3NlcnZpY2VzL3RhYmVsbGVfc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBLHFFQUFxRTtZQUNyRSxpQ0FBaUM7WUFDakMsb0NBQW9DO1lBRXBDO2dCQUFBO2dCQUdBLENBQUM7Z0JBQUQsbUJBQUM7WUFBRCxDQUFDLEFBSEQsSUFHQztZQUhELHVDQUdDLENBQUE7WUFJRDtnQkFHSSx3QkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUY5QixhQUFRLEdBQVcsY0FBYyxDQUFDO2dCQUdsQyxDQUFDO2dCQUVNLHdDQUFlLEdBQXRCO29CQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQzt5QkFDaEQsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQVZMO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVliLHFCQUFDO1lBQUQsQ0FBQyxBQVhELElBV0M7WUFYRCwyQ0FXQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBSZXNwb25zZX0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vIE5vIG5lZWQgdG8gc3BlY2lmeSB0aGUgb3BlcmF0b3IsIGp1c3QgaW1wb3J0IGFuZCBpdCB3aWxsIGF1dG9wYXRjaFxyXG4vL2ltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy9pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlwb0F0dGl2aXRhIHtcclxuICAgIFRpcG9BdHRpdml0YU5vOiBudW1iZXI7XHJcbiAgICBEZXNjcml6aW9uZTogc3RyaW5nOyBcclxufVxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRhYmVsbGVTZXJ2aWNlIHtcclxuICAgIF91cmxCYXNlOiBzdHJpbmcgPSAnL2FwaS9UYWJlbGxlJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGlwaUF0dGl2aXRhKCk6IE9ic2VydmFibGU8VGlwb0F0dGl2aXRhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl91cmxCYXNlICsgXCIvVGlwaUF0dGl2aXRhXCIpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxufSAiXX0=