var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'ricerca/FiltroRicerca', 'ricerca/RicercaService'], function (require, exports, aurelia_framework_1, FiltroRicerca_1, RicercaService_1) {
    "use strict";
    var ricerca = (function () {
        function ricerca(ricercaService) {
            this.ricercaService = ricercaService;
            this.heading = 'Ricerca';
            this.filtro = new FiltroRicerca_1.FiltroRicerca();
        }
        ricerca.prototype.activate = function () {
        };
        ricerca.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave again?');
        };
        ricerca.prototype.eseguiRicerca = function () {
            var _this = this;
            this.ricercaService.ricerca(this.filtro)
                .then(function (response) {
                _this.risultato = response.content;
            });
        };
        ricerca.prototype.selezionaRiga = function (singolo) {
            var _this = this;
            this.totSelezionate = 0;
            this.risultato.Righe.forEach(function (riga) {
                if (riga.selezionato != undefined && riga.selezionato)
                    _this.totSelezionate += riga.NumOre;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmljZXJjYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9yaWNlcmNhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFPSSxpQkFBb0IsY0FBOEI7WUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1lBTmxELFlBQU8sR0FBRyxTQUFTLENBQUM7WUFPaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUN0QyxDQUFDO1FBRUQsMEJBQVEsR0FBUjtRQUVBLENBQUM7UUFFRCwrQkFBYSxHQUFiO1lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFTSwrQkFBYSxHQUFwQjtZQUFBLGlCQUtDO1lBSkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDbkMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsU0FBUyxHQUF1QixRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzFELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVNLCtCQUFhLEdBQXBCLFVBQXFCLE9BQU87WUFBNUIsaUJBT0M7WUFORyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztZQUV4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUNsRCxLQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBbENMO1lBQUMsOEJBQVU7O21CQUFBO1FBbUNYLGNBQUM7SUFBRCxDQUFDLEFBbENELElBa0NDO0lBbENZLGVBQU8sVUFrQ25CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtGaWx0cm9SaWNlcmNhfSBmcm9tICdyaWNlcmNhL0ZpbHRyb1JpY2VyY2EnO1xyXG5pbXBvcnQge1JpY2VyY2FTZXJ2aWNlfSBmcm9tICdyaWNlcmNhL1JpY2VyY2FTZXJ2aWNlJztcclxuaW1wb3J0IHtSaXN1bHRhdG9SaWNlcmNhVm19IGZyb20gJ3JpY2VyY2EvUmlzdWx0YXRvUmljZXJjYVZtJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyByaWNlcmNhIHtcclxuICAgIGhlYWRpbmcgPSAnUmljZXJjYSc7XHJcblxyXG4gICAgZmlsdHJvOiBGaWx0cm9SaWNlcmNhO1xyXG4gICAgcmlzdWx0YXRvOiBSaXN1bHRhdG9SaWNlcmNhVm07XHJcbiAgICB0b3RTZWxlemlvbmF0ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmljZXJjYVNlcnZpY2U6IFJpY2VyY2FTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0cm8gPSBuZXcgRmlsdHJvUmljZXJjYSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjYW5EZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmUgYWdhaW4/Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVzZWd1aVJpY2VyY2EoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yaWNlcmNhU2VydmljZS5yaWNlcmNhKHRoaXMuZmlsdHJvKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpc3VsdGF0byA9IDxSaXN1bHRhdG9SaWNlcmNhVm0+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGV6aW9uYVJpZ2Eoc2luZ29sbyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudG90U2VsZXppb25hdGUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnJpc3VsdGF0by5SaWdoZS5mb3JFYWNoKHJpZ2EgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmlnYS5zZWxlemlvbmF0byAhPSB1bmRlZmluZWQgJiYgcmlnYS5zZWxlemlvbmF0bylcclxuICAgICAgICAgICAgICAgIHRoaXMudG90U2VsZXppb25hdGUgKz0gcmlnYS5OdW1PcmU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=