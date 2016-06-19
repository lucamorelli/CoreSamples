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
    var customerSelect = (function () {
        function customerSelect(clientiService, evtAgg) {
            this.clientiService = clientiService;
            this.evtAgg = evtAgg;
            //@bindable idCliente: number;
            this.clienti = [];
        }
        customerSelect.prototype.bind = function () {
            var _this = this;
            if (this.soloAttivi != undefined && this.soloAttivi) {
                this.clientiService.getAttivi()
                    .then(function (response) {
                    _this.clienti = response.content;
                });
            }
            else {
                this.clientiService.getClienti()
                    .then(function (response) {
                    _this.clienti = response.content;
                });
            }
        };
        customerSelect.prototype.selezionaCliente = function () {
            //if (this.clienteCorrente != undefined) 
            //    this.idCliente = this.clienteCorrente.ClienteNo;
            //else
            //    this.idCliente = undefined;
            this.evtAgg.publish('customerChanged', this.clienteCorrente);
        };
        customerSelect.prototype.clienteCorrenteChanged = function () {
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], customerSelect.prototype, "clienteCorrente", void 0);
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Boolean)
        ], customerSelect.prototype, "soloAttivi", void 0);
        customerSelect = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [ClientiService_1.ClientiService, aurelia_event_aggregator_1.EventAggregator])
        ], customerSelect);
        return customerSelect;
    }());
    exports.customerSelect = customerSelect;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbXBvbmVudHMvY3VzdG9tZXItc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUE7UUFPSSx3QkFBb0IsY0FBOEIsRUFBVSxNQUF1QjtZQUEvRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUxuRiw4QkFBOEI7WUFDOUIsWUFBTyxHQUFjLEVBQUUsQ0FBQztRQUt4QixDQUFDO1FBRUQsNkJBQUksR0FBSjtZQUFBLGlCQWNDO1lBYkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO3FCQUMxQixJQUFJLENBQUMsVUFBQSxRQUFRO29CQUNWLEtBQUksQ0FBQyxPQUFPLEdBQWMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDL0MsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7cUJBQzNCLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ1YsS0FBSSxDQUFDLE9BQU8sR0FBYyxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUM7UUFFTCxDQUFDO1FBR0QseUNBQWdCLEdBQWhCO1lBQ0kseUNBQXlDO1lBQ3pDLHNEQUFzRDtZQUN0RCxNQUFNO1lBQ04saUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBRUQsK0NBQXNCLEdBQXRCO1FBQ0EsQ0FBQztRQWhDRDtZQUFDLDRCQUFROzsrREFBQTtRQUNUO1lBQUMsNEJBQVE7OzBEQUFBO1FBTmI7WUFBQyw4QkFBVTs7MEJBQUE7UUFnRFgscUJBQUM7SUFBRCxDQUFDLEFBL0NELElBK0NDO0lBL0NZLHNCQUFjLGlCQStDMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHtDbGllbnRlfSBmcm9tICcuLi9jbGllbnRpL0NsaWVudGUnO1xyXG5pbXBvcnQge0NsaWVudGlTZXJ2aWNlfSBmcm9tICcuLi9jbGllbnRpL0NsaWVudGlTZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBjdXN0b21lclNlbGVjdCB7XHJcblxyXG4gICAgLy9AYmluZGFibGUgaWRDbGllbnRlOiBudW1iZXI7XHJcbiAgICBjbGllbnRpOiBDbGllbnRlW10gPSBbXTsgXHJcbiAgICBAYmluZGFibGUgY2xpZW50ZUNvcnJlbnRlOiBudW1iZXI7XHJcbiAgICBAYmluZGFibGUgc29sb0F0dGl2aTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaWVudGlTZXJ2aWNlOiBDbGllbnRpU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc29sb0F0dGl2aSAhPSB1bmRlZmluZWQgJiYgdGhpcy5zb2xvQXR0aXZpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50aVNlcnZpY2UuZ2V0QXR0aXZpKClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWVudGkgPSA8Q2xpZW50ZVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IFxyXG4gICAgICAgICAgICB0aGlzLmNsaWVudGlTZXJ2aWNlLmdldENsaWVudGkoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50aSA9IDxDbGllbnRlW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNlbGV6aW9uYUNsaWVudGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9pZiAodGhpcy5jbGllbnRlQ29ycmVudGUgIT0gdW5kZWZpbmVkKSBcclxuICAgICAgICAvLyAgICB0aGlzLmlkQ2xpZW50ZSA9IHRoaXMuY2xpZW50ZUNvcnJlbnRlLkNsaWVudGVObztcclxuICAgICAgICAvL2Vsc2VcclxuICAgICAgICAvLyAgICB0aGlzLmlkQ2xpZW50ZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmV2dEFnZy5wdWJsaXNoKCdjdXN0b21lckNoYW5nZWQnLCB0aGlzLmNsaWVudGVDb3JyZW50ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xpZW50ZUNvcnJlbnRlQ2hhbmdlZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvL2lkQ2xpZW50ZUNoYW5nZWQoKSB7XHJcbiAgICAvLyAgICB0aGlzLmNsaWVudGkuZm9yRWFjaChjbGllbnRlID0+IHtcclxuICAgIC8vICAgICAgICBpZiAoY2xpZW50ZS5DbGllbnRlTm8gPT0gdGhpcy5pZENsaWVudGUpICBcclxuICAgIC8vICAgICAgICAgICAgdGhpcy5jbGllbnRlQ29ycmVudGUgPSBjbGllbnRlO1xyXG5cclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy99XHJcblxyXG5cclxufSJdfQ==