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
    var Pagamento, PagamentiService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            Pagamento = (function () {
                function Pagamento() {
                }
                return Pagamento;
            }());
            exports_1("Pagamento", Pagamento);
            PagamentiService = (function () {
                function PagamentiService(http) {
                    this.http = http;
                    this._urlBase = '/api/Pagamento';
                }
                PagamentiService.prototype.pagamentiCliente = function (idCliente) {
                    return this.http.get(this._urlBase + "/PagamentiCliente/" + idCliente)
                        .map(function (res) { return res.json(); });
                };
                PagamentiService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], PagamentiService);
                return PagamentiService;
            }());
            exports_1("PagamentiService", PagamentiService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnYW1lbnRpX3NlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvc2VydmljZXMvcGFnYW1lbnRpX3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFXQTtnQkFBQTtnQkFjQSxDQUFDO2dCQUFELGdCQUFDO1lBQUQsQ0FBQyxBQWRELElBY0M7WUFkRCxpQ0FjQyxDQUFBO1lBR0Q7Z0JBR0ksMEJBQW9CLElBQVU7b0JBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFGOUIsYUFBUSxHQUFXLGdCQUFnQixDQUFDO2dCQUdwQyxDQUFDO2dCQUVNLDJDQUFnQixHQUF2QixVQUF3QixTQUFpQjtvQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO3lCQUNqRSxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBVkw7b0JBQUMsaUJBQVUsRUFBRTs7b0NBQUE7Z0JBWWIsdUJBQUM7WUFBRCxDQUFDLEFBWEQsSUFXQztZQVhELCtDQVdDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0h0dHAsIFJlc3BvbnNlfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG4vLyBObyBuZWVkIHRvIHNwZWNpZnkgdGhlIG9wZXJhdG9yLCBqdXN0IGltcG9ydCBhbmQgaXQgd2lsbCBhdXRvcGF0Y2hcclxuLy9pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XHJcbi8vaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5cclxuaW1wb3J0IHtDbGllbnRlfSBmcm9tICcuL2NsaWVudGlfc2VydmljZSc7IFxyXG5pbXBvcnQge0NvbW1lc3NhfSBmcm9tICcuL2NvbW1lc3NlX3NlcnZpY2UnO1xyXG5pbXBvcnQge0ZhdHR1cmF9IGZyb20gJy4vZmF0dHVyZV9zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdhbWVudG8ge1xyXG4gICAgcHVibGljIFBhZ2FtZW50b05vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2xpZW50ZU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ29tbWVzc2FObzogbnVtYmVyO1xyXG4gICAgcHVibGljIERhdGFQYWdhbWVudG86IERhdGU7XHJcbiAgICBwdWJsaWMgSW1wb3J0bzogbnVtYmVyO1xyXG4gICAgcHVibGljIERlc2NyaXppb25lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgTm90ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIEZhdHR1cmFObzogbnVtYmVyO1xyXG4gICAgcHVibGljIEluUmllcGlsb2dvOiBib29sZWFuOyBcclxuXHJcbiAgICBwdWJsaWMgQ2xpZW50ZTogQ2xpZW50ZTtcclxuICAgIHB1YmxpYyBGYXR0dXJhOiBGYXR0dXJhO1xyXG4gICAgcHVibGljIENvbW1lc3NhOiBDb21tZXNzYTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGFnYW1lbnRpU2VydmljZSB7XHJcbiAgICBfdXJsQmFzZTogc3RyaW5nID0gJy9hcGkvUGFnYW1lbnRvJztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGFnYW1lbnRpQ2xpZW50ZShpZENsaWVudGU6IG51bWJlcik6IE9ic2VydmFibGU8UGFnYW1lbnRvW10+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLl91cmxCYXNlICsgXCIvUGFnYW1lbnRpQ2xpZW50ZS9cIiArIGlkQ2xpZW50ZSlcclxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG59Il19