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
    var Progetto, ProgettiService;
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
            Progetto = (function () {
                function Progetto() {
                }
                return Progetto;
            }());
            exports_1("Progetto", Progetto);
            ProgettiService = (function () {
                function ProgettiService(http) {
                    this.http = http;
                    this._urlBase = '/api/Progetto';
                }
                ProgettiService.prototype.attiviCliente = function (idCliente) {
                    return this.http.get(this._urlBase + "/AttiviCliente/" + idCliente)
                        .map(function (res) { return res.json(); });
                };
                ProgettiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProgettiService);
                return ProgettiService;
            }());
            exports_1("ProgettiService", ProgettiService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ2V0dGlfc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9zZXJ2aWNlcy9wcm9nZXR0aV9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBR0EscUVBQXFFO1lBQ3JFLGlDQUFpQztZQUNqQyxvQ0FBb0M7WUFFcEM7Z0JBQUE7Z0JBTUEsQ0FBQztnQkFBRCxlQUFDO1lBQUQsQ0FBQyxBQU5ELElBTUM7WUFORCwrQkFNQyxDQUFBO1lBR0Q7Z0JBR0kseUJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGOUIsYUFBUSxHQUFXLGVBQWUsQ0FBQztnQkFHbkMsQ0FBQztnQkFFTSx1Q0FBYSxHQUFwQixVQUFxQixTQUFpQjtvQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQWlCLEdBQUcsU0FBUyxDQUFDO3lCQUM5RCxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBVkw7b0JBQUMsaUJBQVUsRUFBRTs7bUNBQUE7Z0JBWWIsc0JBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELDZDQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vLyBObyBuZWVkIHRvIHNwZWNpZnkgdGhlIG9wZXJhdG9yLCBqdXN0IGltcG9ydCBhbmQgaXQgd2lsbCBhdXRvcGF0Y2hcclxuLy9pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbi8vaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dldHRvIHtcclxuICAgIHB1YmxpYyBQcm9nZXR0b05vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRGVzY3JpemlvbmU6IHN0cmluZztcclxuICAgIHB1YmxpYyBDbGllbnRlTm86IG51bWJlcjtcclxuICAgIHB1YmxpYyBBdHRpdm86IGJvb2xlYW47IFxyXG4gICAgcHVibGljIE5vdGU6IHN0cmluZztcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZ2V0dGlTZXJ2aWNlIHtcclxuICAgIF91cmxCYXNlOiBzdHJpbmcgPSAnL2FwaS9Qcm9nZXR0byc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGF0dGl2aUNsaWVudGUoaWRDbGllbnRlOiBudW1iZXIpOiBPYnNlcnZhYmxlPFByb2dldHRvW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl91cmxCYXNlICsgXCIvQXR0aXZpQ2xpZW50ZS9cIiArIGlkQ2xpZW50ZSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG59ICJdfQ==