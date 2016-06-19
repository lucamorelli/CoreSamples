var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', '../clienti/ClientiService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, ClientiService_1) {
    "use strict";
    var customerLocation = (function () {
        function customerLocation(clientiService, evtAgg) {
            var _this = this;
            this.clientiService = clientiService;
            this.evtAgg = evtAgg;
            this.locazioni = [];
            this.evtAgg.subscribe('customerChanged', function (idCliente) {
                _this.clientiService.getLocazioni(idCliente).then(function (response) {
                    _this.locazioni = response.content;
                });
            });
        }
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], customerLocation.prototype, "locazioneCorrente", void 0);
        customerLocation = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [ClientiService_1.ClientiService, aurelia_event_aggregator_1.EventAggregator])
        ], customerLocation);
        return customerLocation;
    }());
    exports.customerLocation = customerLocation;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvY29tcG9uZW50cy9jdXN0b21lci1sb2NhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFBO1FBS0ksMEJBQW9CLGNBQThCLEVBQVUsTUFBdUI7WUFMdkYsaUJBWUM7WUFQdUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7WUFIbkYsY0FBUyxHQUFnQixFQUFFLENBQUM7WUFJeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxTQUFTO2dCQUMvQyxLQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUNyRCxLQUFJLENBQUMsU0FBUyxHQUFnQixRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQVJEO1lBQUMsNEJBQVE7O21FQUFBO1FBSmI7WUFBQyw4QkFBVTs7NEJBQUE7UUFhWCx1QkFBQztJQUFELENBQUMsQUFaRCxJQVlDO0lBWlksd0JBQWdCLG1CQVk1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQge0xvY2F6aW9uZX0gZnJvbSAnY2xpZW50aS9Mb2NhemlvbmUnO1xyXG5pbXBvcnQge0NsaWVudGlTZXJ2aWNlfSBmcm9tICcuLi9jbGllbnRpL0NsaWVudGlTZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBjdXN0b21lckxvY2F0aW9uIHtcclxuXHJcbiAgICBsb2Nhemlvbmk6IExvY2F6aW9uZVtdID0gW107XHJcbiAgICBAYmluZGFibGUgbG9jYXppb25lQ29ycmVudGU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudGlTZXJ2aWNlOiBDbGllbnRpU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMuZXZ0QWdnLnN1YnNjcmliZSgnY3VzdG9tZXJDaGFuZ2VkJywgKGlkQ2xpZW50ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsaWVudGlTZXJ2aWNlLmdldExvY2F6aW9uaShpZENsaWVudGUpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhemlvbmkgPSA8TG9jYXppb25lW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=