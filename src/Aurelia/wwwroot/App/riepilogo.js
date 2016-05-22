var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'ricerca/RicercaService'], function (require, exports, aurelia_framework_1, RicercaService_1) {
    "use strict";
    var riepilogo = (function () {
        function riepilogo(ricercaService) {
            var _this = this;
            this.ricercaService = ricercaService;
            this.heading = 'Riepilogo Attività';
            this.ricercaService.riepilogo()
                .then(function (response) {
                _this.risultato = response.content;
            });
        }
        riepilogo.prototype.activate = function () {
        };
        riepilogo.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave again?');
        };
        riepilogo.prototype.datiClienteMese = function (datiGiornalieri) {
            var _this = this;
            this.risultato.DatiClienti.forEach(function (datiCliente) {
                if (datiCliente.Mese == datiGiornalieri.Mese) {
                    _this.clienteMeseCorrente = datiCliente;
                }
            });
        };
        riepilogo = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [RicercaService_1.RicercaService])
        ], riepilogo);
        return riepilogo;
    }());
    exports.riepilogo = riepilogo;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmllcGlsb2dvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3JpZXBpbG9nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFBO1FBTUksbUJBQW9CLGNBQThCO1lBTnRELGlCQThCQztZQXhCdUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1lBTGxELFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztZQU0zQixJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRTtpQkFDMUIsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsU0FBUyxHQUF5QixRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVELDRCQUFRLEdBQVI7UUFFQSxDQUFDO1FBRUQsaUNBQWEsR0FBYjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBRU0sbUNBQWUsR0FBdEIsVUFBdUIsZUFBa0Q7WUFBekUsaUJBT0M7WUFORyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQSxXQUFXO2dCQUMxQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxLQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDO2dCQUMzQyxDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBN0JMO1lBQUMsOEJBQVU7O3FCQUFBO1FBK0JYLGdCQUFDO0lBQUQsQ0FBQyxBQTlCRCxJQThCQztJQTlCWSxpQkFBUyxZQThCckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0ZpbHRyb1JpY2VyY2F9IGZyb20gJ3JpY2VyY2EvRmlsdHJvUmljZXJjYSc7XHJcbmltcG9ydCB7UmljZXJjYVNlcnZpY2V9IGZyb20gJ3JpY2VyY2EvUmljZXJjYVNlcnZpY2UnO1xyXG5pbXBvcnQge1Jpc3VsdGF0b1JpZXBpbG9nb1ZtfSBmcm9tICdyaWNlcmNhL1Jpc3VsdGF0b1JpZXBpbG9nb1ZtJztcclxuaW1wb3J0IHtSaXN1bHRhdG9SaWVwaWxvZ29EZXR0YWdsaW9NZXNlQ2xpZW50ZVZtfSBmcm9tICdyaWNlcmNhL1Jpc3VsdGF0b1JpZXBpbG9nb0RldHRhZ2xpb01lc2VDbGllbnRlVm0nO1xyXG5pbXBvcnQge1Jpc3VsdGF0b1JpZXBpbG9nb0RldHRhZ2xpb01lc2VWbX0gZnJvbSAncmljZXJjYS9SaXN1bHRhdG9SaWVwaWxvZ29EZXR0YWdsaW9NZXNlVm0nO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIHJpZXBpbG9nbyB7XHJcbiAgICBoZWFkaW5nID0gJ1JpZXBpbG9nbyBBdHRpdml0w6AnO1xyXG5cclxuICAgIHJpc3VsdGF0bzogUmlzdWx0YXRvUmllcGlsb2dvVm07XHJcbiAgICBjbGllbnRlTWVzZUNvcnJlbnRlOiBSaXN1bHRhdG9SaWVwaWxvZ29EZXR0YWdsaW9NZXNlQ2xpZW50ZVZtO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmljZXJjYVNlcnZpY2U6IFJpY2VyY2FTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5yaWNlcmNhU2VydmljZS5yaWVwaWxvZ28oKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJpc3VsdGF0byA9IDxSaXN1bHRhdG9SaWVwaWxvZ29WbT5yZXNwb25zZS5jb250ZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlIGFnYWluPycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkYXRpQ2xpZW50ZU1lc2UoZGF0aUdpb3JuYWxpZXJpOiBSaXN1bHRhdG9SaWVwaWxvZ29EZXR0YWdsaW9NZXNlVm0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJpc3VsdGF0by5EYXRpQ2xpZW50aS5mb3JFYWNoKGRhdGlDbGllbnRlID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGlDbGllbnRlLk1lc2UgPT0gZGF0aUdpb3JuYWxpZXJpLk1lc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50ZU1lc2VDb3JyZW50ZSA9IGRhdGlDbGllbnRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==