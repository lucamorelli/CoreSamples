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
    var Commessa, CommesseService;
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
            // http://stackoverflow.com/questions/28910864/angular-2-how-to-use-import-the-http-module
            Commessa = (function () {
                function Commessa() {
                }
                return Commessa;
            }());
            exports_1("Commessa", Commessa);
            // https://auth0.com/blog/2015/10/15/angular-2-series-part-3-using-http/
            CommesseService = (function () {
                function CommesseService(http) {
                    this.http = http;
                    this._urlBase = '/api/Commessa';
                }
                CommesseService.prototype.commesseCliente = function (idCliente) {
                    return this.http.get(this._urlBase + "/ListaOperative/" + idCliente)
                        .map(function (res) { return res.json(); });
                };
                CommesseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CommesseService);
                return CommesseService;
            }());
            exports_1("CommesseService", CommesseService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVzc2Vfc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9zZXJ2aWNlcy9jb21tZXNzZV9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0EscUVBQXFFO1lBQ3JFLGlDQUFpQztZQUNqQyxvQ0FBb0M7WUFFcEMsMEZBQTBGO1lBRTFGO2dCQUFBO2dCQVFBLENBQUM7Z0JBQUQsZUFBQztZQUFELENBQUMsQUFSRCxJQVFDO1lBUkQsK0JBUUMsQ0FBQTtZQUVELHdFQUF3RTtZQUV4RTtnQkFHSSx5QkFBb0IsSUFBVTtvQkFBVixTQUFJLEdBQUosSUFBSSxDQUFNO29CQUY5QixhQUFRLEdBQVcsZUFBZSxDQUFDO2dCQUduQyxDQUFDO2dCQUVNLHlDQUFlLEdBQXRCLFVBQXVCLFNBQWlCO29CQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7eUJBQy9ELEdBQUcsQ0FBQyxVQUFDLEdBQWEsSUFBSyxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFWTDtvQkFBQyxpQkFBVSxFQUFFOzttQ0FBQTtnQkFZYixzQkFBQztZQUFELENBQUMsQUFYRCxJQVdDO1lBWEQsNkNBV0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vIE5vIG5lZWQgdG8gc3BlY2lmeSB0aGUgb3BlcmF0b3IsIGp1c3QgaW1wb3J0IGFuZCBpdCB3aWxsIGF1dG9wYXRjaFxyXG4vL2ltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuLy9pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbSc7XHJcblxyXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI4OTEwODY0L2FuZ3VsYXItMi1ob3ctdG8tdXNlLWltcG9ydC10aGUtaHR0cC1tb2R1bGVcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tZXNzYSB7XHJcbiAgICBwdWJsaWMgQ29tbWVzc2FObzogbnVtYmVyO1xyXG4gICAgcHVibGljIERlc2NyaXppb25lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgQ2xpZW50ZU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgUHJldmVudGl2b05vOiBudW1iZXI7IFxyXG4gICAgcHVibGljIEltcG9ydG86IG51bWJlcjtcclxuICAgIHB1YmxpYyBOb3RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgVGlwb0F0dGl2aXRhTm86IG51bWJlcjtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9hdXRoMC5jb20vYmxvZy8yMDE1LzEwLzE1L2FuZ3VsYXItMi1zZXJpZXMtcGFydC0zLXVzaW5nLWh0dHAvXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbW1lc3NlU2VydmljZSB7XHJcbiAgICBfdXJsQmFzZTogc3RyaW5nID0gJy9hcGkvQ29tbWVzc2EnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21tZXNzZUNsaWVudGUoaWRDbGllbnRlOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvbW1lc3NhW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl91cmxCYXNlICsgXCIvTGlzdGFPcGVyYXRpdmUvXCIgKyBpZENsaWVudGUpXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==