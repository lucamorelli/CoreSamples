var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'ricerca/FiltroRicercaDiario', 'ricerca/RicercaService'], function (require, exports, aurelia_framework_1, FiltroRicercaDiario_1, RicercaService_1) {
    "use strict";
    var ricerca = (function () {
        function ricerca(ricercaService) {
            this.ricercaService = ricercaService;
            this.heading = 'Ricerca Spesa';
            this.filtro = new FiltroRicercaDiario_1.FiltroRicercaDiario();
        }
        ricerca.prototype.activate = function () {
        };
        ricerca.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave again?');
        };
        ricerca.prototype.eseguiRicerca = function () {
            var _this = this;
            this.ricercaService.ricercaDiario(this.filtro)
                .then(function (response) {
                _this.risultato = response.content;
            });
        };
        ricerca = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [RicercaService_1.RicercaService])
        ], ricerca);
        return ricerca;
    }());
    exports.ricerca = ricerca;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljZXJjYURpYXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9yaWNlcmNhRGlhcmlvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFPSSxpQkFBb0IsY0FBOEI7WUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1lBTmxELFlBQU8sR0FBRyxlQUFlLENBQUM7WUFPdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7UUFDNUMsQ0FBQztRQUVELDBCQUFRLEdBQVI7UUFFQSxDQUFDO1FBRUQsK0JBQWEsR0FBYjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRU0sK0JBQWEsR0FBcEI7WUFBQSxpQkFLQztZQUpHLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ3pDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLFNBQVMsR0FBYSxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQXpCTDtZQUFDLDhCQUFVOzttQkFBQTtRQTJCWCxjQUFDO0lBQUQsQ0FBQyxBQTFCRCxJQTBCQztJQTFCWSxlQUFPLFVBMEJuQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RmlsdHJvUmljZXJjYURpYXJpb30gZnJvbSAncmljZXJjYS9GaWx0cm9SaWNlcmNhRGlhcmlvJztcclxuaW1wb3J0IHtSaWNlcmNhU2VydmljZX0gZnJvbSAncmljZXJjYS9SaWNlcmNhU2VydmljZSc7XHJcbmltcG9ydCB7RGlhcmlvfSBmcm9tICdEaWFyaW8vRGlhcmlvJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyByaWNlcmNhIHtcclxuICAgIGhlYWRpbmcgPSAnUmljZXJjYSBTcGVzYSc7XHJcblxyXG4gICAgZmlsdHJvOiBGaWx0cm9SaWNlcmNhRGlhcmlvO1xyXG4gICAgcmlzdWx0YXRvOiBEaWFyaW9bXTtcclxuICAgIHRvdFNlbGV6aW9uYXRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByaWNlcmNhU2VydmljZTogUmljZXJjYVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmZpbHRybyA9IG5ldyBGaWx0cm9SaWNlcmNhRGlhcmlvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZSBhZ2Fpbj8nKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXNlZ3VpUmljZXJjYSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpY2VyY2FTZXJ2aWNlLnJpY2VyY2FEaWFyaW8odGhpcy5maWx0cm8pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmlzdWx0YXRvID0gPERpYXJpb1tdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==