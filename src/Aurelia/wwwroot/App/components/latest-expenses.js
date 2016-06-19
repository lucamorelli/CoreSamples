var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', 'spese/SpeseService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, SpeseService_1) {
    "use strict";
    //@bindable({
    //    name: 'recordNumber',
    //    attribute: 'record-number',
    //    defaultValue: 0,
    //    changeHandler: 'randomFunction'
    //    defaultBindingMode: bindingMode.oneTime
    //})
    var latestExpenses = (function () {
        function latestExpenses(speseService, element, evtAgg) {
            var _this = this;
            this.speseService = speseService;
            this.element = element;
            this.evtAgg = evtAgg;
            this.spese = [];
            this.showRowCommands = false;
            this.evtAgg.subscribe('expenseUpdated', function () {
                _this.speseService.getUltimeSpese(_this.recordNumber)
                    .then(function (response) {
                    _this.spese = response.content;
                });
            });
        }
        latestExpenses.prototype.bind = function () {
            var _this = this;
            console.log(this.recordNumber);
            this.speseService.getUltimeSpese(this.recordNumber)
                .then(function (response) {
                _this.spese = response.content;
            });
        };
        latestExpenses.prototype.recordNumberChanged = function () {
        };
        latestExpenses.prototype.modifica = function (spesa) {
            var e = new CustomEvent('on-modifica-spesa', {
                detail: spesa,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        latestExpenses.prototype.cancella = function (spesa) {
            var e = new CustomEvent('on-cancella-spesa', {
                detail: spesa,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Object)
        ], latestExpenses.prototype, "recordNumber", void 0);
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Boolean)
        ], latestExpenses.prototype, "showRowCommands", void 0);
        latestExpenses = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [SpeseService_1.SpeseService, Element, aurelia_event_aggregator_1.EventAggregator])
        ], latestExpenses);
        return latestExpenses;
    }());
    exports.latestExpenses = latestExpenses;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LWV4cGVuc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbXBvbmVudHMvbGF0ZXN0LWV4cGVuc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBU0EsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQyw2Q0FBNkM7SUFDN0MsSUFBSTtJQUVKO1FBTUksd0JBQW9CLFlBQTBCLEVBQVUsT0FBZ0IsRUFBVSxNQUF1QjtZQU43RyxpQkFnREM7WUExQ3VCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1lBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUztZQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBSnpHLFVBQUssR0FBWSxFQUFFLENBQUM7WUFNaEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUM7cUJBQzlDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ1YsS0FBSSxDQUFDLEtBQUssR0FBWSxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztRQUVELDZCQUFJLEdBQUo7WUFBQSxpQkFNQztZQUxHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7aUJBQzlDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLEtBQUssR0FBWSxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVNLDRDQUFtQixHQUExQjtRQUVBLENBQUM7UUFFTSxpQ0FBUSxHQUFmLFVBQWdCLEtBQVk7WUFFeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3pDLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUFFTSxpQ0FBUSxHQUFmLFVBQWdCLEtBQVk7WUFDeEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3pDLE1BQU0sRUFBRSxLQUFLO2dCQUNiLE9BQU8sRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7UUEzQ0Q7WUFBQyw0QkFBUTs7NERBQUE7UUFDVDtZQUFDLDRCQUFROzsrREFBQTtRQUxiO1lBQUMsOEJBQVU7OzBCQUFBO1FBaURYLHFCQUFDO0lBQUQsQ0FBQyxBQWhERCxJQWdEQztJQWhEWSxzQkFBYyxpQkFnRDFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG4vL2ltcG9ydCB7YmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5cclxuaW1wb3J0IHtTcGVzZVNlcnZpY2V9IGZyb20gJ3NwZXNlL1NwZXNlU2VydmljZSc7XHJcbmltcG9ydCB7U3Blc2F9IGZyb20gJ3NwZXNlL1NwZXNhJztcclxuXHJcbi8vQGJpbmRhYmxlKHtcclxuLy8gICAgbmFtZTogJ3JlY29yZE51bWJlcicsXHJcbi8vICAgIGF0dHJpYnV0ZTogJ3JlY29yZC1udW1iZXInLFxyXG4vLyAgICBkZWZhdWx0VmFsdWU6IDAsXHJcbi8vICAgIGNoYW5nZUhhbmRsZXI6ICdyYW5kb21GdW5jdGlvbidcclxuLy8gICAgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS5vbmVUaW1lXHJcbi8vfSlcclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGxhdGVzdEV4cGVuc2VzIHtcclxuXHJcbiAgICBzcGVzZTogU3Blc2FbXSA9IFtdO1xyXG4gICAgQGJpbmRhYmxlIHJlY29yZE51bWJlcjtcclxuICAgIEBiaW5kYWJsZSBzaG93Um93Q29tbWFuZHM6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzcGVzZVNlcnZpY2U6IFNwZXNlU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50LCBwcml2YXRlIGV2dEFnZzogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1Jvd0NvbW1hbmRzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZXZ0QWdnLnN1YnNjcmliZSgnZXhwZW5zZVVwZGF0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Blc2VTZXJ2aWNlLmdldFVsdGltZVNwZXNlKHRoaXMucmVjb3JkTnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3Blc2UgPSA8U3Blc2FbXT5yZXNwb25zZS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWNvcmROdW1iZXIpO1xyXG4gICAgICAgIHRoaXMuc3Blc2VTZXJ2aWNlLmdldFVsdGltZVNwZXNlKHRoaXMucmVjb3JkTnVtYmVyKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZXNlID0gPFNwZXNhW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlY29yZE51bWJlckNoYW5nZWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb2RpZmljYShzcGVzYTogU3Blc2EpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ29uLW1vZGlmaWNhLXNwZXNhJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHNwZXNhLFxyXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbGxhKHNwZXNhOiBTcGVzYSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlID0gbmV3IEN1c3RvbUV2ZW50KCdvbi1jYW5jZWxsYS1zcGVzYScsIHtcclxuICAgICAgICAgICAgZGV0YWlsOiBzcGVzYSxcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==