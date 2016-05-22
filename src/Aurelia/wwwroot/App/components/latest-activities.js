var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', 'attivita/AttivitaService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, AttivitaService_1) {
    "use strict";
    var latestActivities = (function () {
        function latestActivities(attivitaService, element, evtAgg) {
            var _this = this;
            this.attivitaService = attivitaService;
            this.element = element;
            this.evtAgg = evtAgg;
            this.attivita = [];
            this.recordNumber = 30;
            this.showRowCommands = false;
            this.evtAgg.subscribe('attivitaUpdated', function () {
                _this.attivitaService.getUltime(_this.recordNumber)
                    .then(function (response) {
                    _this.attivita = response.content;
                });
            });
        }
        latestActivities.prototype.bind = function () {
            var _this = this;
            console.log(this.showRowCommands);
            this.attivitaService.getUltime(this.recordNumber)
                .then(function (response) {
                _this.attivita = response.content;
            });
        };
        latestActivities.prototype.recordNumberChanged = function () {
        };
        latestActivities.prototype.modifica = function (attivita) {
            var e = new CustomEvent('on-modifica-attivita', {
                detail: attivita,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        latestActivities.prototype.cancella = function (attivita) {
            var e = new CustomEvent('on-cancella-attivita', {
                detail: attivita,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], latestActivities.prototype, "recordNumber", void 0);
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Boolean)
        ], latestActivities.prototype, "showRowCommands", void 0);
        latestActivities = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [AttivitaService_1.AttivitaService, Element, aurelia_event_aggregator_1.EventAggregator])
        ], latestActivities);
        return latestActivities;
    }());
    exports.latestActivities = latestActivities;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LWFjdGl2aXRpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvY29tcG9uZW50cy9sYXRlc3QtYWN0aXZpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVNBO1FBTUksMEJBQW9CLGVBQWdDLEVBQVUsT0FBZ0IsRUFBVSxNQUF1QjtZQU5uSCxpQkFnREM7WUExQ3VCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUovRyxhQUFRLEdBQXVCLEVBQUUsQ0FBQztZQUs5QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUU3QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDckMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQztxQkFDNUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDVixLQUFJLENBQUMsUUFBUSxHQUF1QixRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUN6RCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztRQUVNLCtCQUFJLEdBQVg7WUFBQSxpQkFNQztZQUxHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7aUJBQzVDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBdUIsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFTSw4Q0FBbUIsR0FBMUI7UUFFQSxDQUFDO1FBRU0sbUNBQVEsR0FBZixVQUFnQixRQUEwQjtZQUV0QyxJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDNUMsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLE9BQU8sRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFTSxtQ0FBUSxHQUFmLFVBQWdCLFFBQTBCO1lBQ3RDLElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLHNCQUFzQixFQUFFO2dCQUM1QyxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQTNDRDtZQUFDLDRCQUFROzs4REFBQTtRQUNUO1lBQUMsNEJBQVE7O2lFQUFBO1FBTGI7WUFBQyw4QkFBVTs7NEJBQUE7UUFpRFgsdUJBQUM7SUFBRCxDQUFDLEFBaERELElBZ0RDO0lBaERZLHdCQUFnQixtQkFnRDVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2N1c3RvbUVsZW1lbnR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQge0F0dGl2aXRhU2VydmljZX0gZnJvbSAnYXR0aXZpdGEvQXR0aXZpdGFTZXJ2aWNlJztcclxuaW1wb3J0IHtVbHRpbWFBdHRpdml0YVZtfSBmcm9tICdhdHRpdml0YS91bHRpbWFBdHRpdml0YVZtJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBsYXRlc3RBY3Rpdml0aWVzIHtcclxuXHJcbiAgICBhdHRpdml0YTogVWx0aW1hQXR0aXZpdGFWbVtdID0gW107XHJcbiAgICBAYmluZGFibGUgcmVjb3JkTnVtYmVyOiBudW1iZXI7XHJcbiAgICBAYmluZGFibGUgc2hvd1Jvd0NvbW1hbmRzOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXR0aXZpdGFTZXJ2aWNlOiBBdHRpdml0YVNlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMucmVjb3JkTnVtYmVyID0gMzA7XHJcbiAgICAgICAgdGhpcy5zaG93Um93Q29tbWFuZHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5ldnRBZ2cuc3Vic2NyaWJlKCdhdHRpdml0YVVwZGF0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFTZXJ2aWNlLmdldFVsdGltZSh0aGlzLnJlY29yZE51bWJlcilcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGl2aXRhID0gPFVsdGltYUF0dGl2aXRhVm1bXT5yZXNwb25zZS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2hvd1Jvd0NvbW1hbmRzKTtcclxuICAgICAgICB0aGlzLmF0dGl2aXRhU2VydmljZS5nZXRVbHRpbWUodGhpcy5yZWNvcmROdW1iZXIpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0aXZpdGEgPSA8VWx0aW1hQXR0aXZpdGFWbVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWNvcmROdW1iZXJDaGFuZ2VkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9kaWZpY2EoYXR0aXZpdGE6IFVsdGltYUF0dGl2aXRhVm0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ29uLW1vZGlmaWNhLWF0dGl2aXRhJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IGF0dGl2aXRhLFxyXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbGxhKGF0dGl2aXRhOiBVbHRpbWFBdHRpdml0YVZtKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ29uLWNhbmNlbGxhLWF0dGl2aXRhJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IGF0dGl2aXRhLFxyXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICB9XHJcblxyXG59Il19