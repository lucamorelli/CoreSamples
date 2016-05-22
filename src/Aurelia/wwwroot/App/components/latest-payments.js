var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', 'pagamenti/PagamentoService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, PagamentoService_1) {
    "use strict";
    var latestPayments = (function () {
        function latestPayments(pagamentoService, element, evtAgg) {
            var _this = this;
            this.pagamentoService = pagamentoService;
            this.element = element;
            this.evtAgg = evtAgg;
            this.pagamenti = [];
            this.recordNumber = 30;
            this.showRowCommands = false;
            this.evtAgg.subscribe('paymentUpdated', function () {
                _this.pagamentoService.ultimi(_this.recordNumber)
                    .then(function (response) {
                    _this.pagamenti = response.content;
                });
            });
        }
        latestPayments.prototype.bind = function () {
            var _this = this;
            this.pagamentoService.ultimi(this.recordNumber)
                .then(function (response) {
                _this.pagamenti = response.content;
            });
        };
        latestPayments.prototype.recordNumberChanged = function () {
        };
        latestPayments.prototype.modifica = function (pagamento) {
            var e = new CustomEvent('on-modifica-pagamento', {
                detail: pagamento,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        latestPayments.prototype.cancella = function (pagamento) {
            var e = new CustomEvent('on-cancella-pagamento', {
                detail: pagamento,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Object)
        ], latestPayments.prototype, "recordNumber", void 0);
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Boolean)
        ], latestPayments.prototype, "showRowCommands", void 0);
        latestPayments = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [PagamentoService_1.PagamentoService, Element, aurelia_event_aggregator_1.EventAggregator])
        ], latestPayments);
        return latestPayments;
    }());
    exports.latestPayments = latestPayments;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LXBheW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbXBvbmVudHMvbGF0ZXN0LXBheW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBU0E7UUFNSSx3QkFBb0IsZ0JBQWtDLEVBQVUsT0FBZ0IsRUFBVSxNQUF1QjtZQU5ySCxpQkE4Q0M7WUF4Q3VCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7WUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFTO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7WUFKakgsY0FBUyxHQUFnQixFQUFFLENBQUM7WUFLeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFFN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3BDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQztxQkFDMUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDVixLQUFJLENBQUMsU0FBUyxHQUFnQixRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELDZCQUFJLEdBQUo7WUFBQSxpQkFLQztZQUpHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDMUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsU0FBUyxHQUFnQixRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVNLDRDQUFtQixHQUExQjtRQUVBLENBQUM7UUFFTSxpQ0FBUSxHQUFmLFVBQWdCLFNBQW9CO1lBRWhDLElBQUksQ0FBQyxHQUFHLElBQUksV0FBVyxDQUFDLHVCQUF1QixFQUFFO2dCQUM3QyxNQUFNLEVBQUUsU0FBUztnQkFDakIsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVNLGlDQUFRLEdBQWYsVUFBZ0IsU0FBb0I7WUFDaEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsdUJBQXVCLEVBQUU7Z0JBQzdDLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsSUFBSTthQUNoQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBekNEO1lBQUMsNEJBQVE7OzREQUFBO1FBQ1Q7WUFBQyw0QkFBUTs7K0RBQUE7UUFMYjtZQUFDLDhCQUFVOzswQkFBQTtRQStDWCxxQkFBQztJQUFELENBQUMsQUE5Q0QsSUE4Q0M7SUE5Q1ksc0JBQWMsaUJBOEMxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuLy9pbXBvcnQge2JpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHtQYWdhbWVudG9TZXJ2aWNlfSBmcm9tICdwYWdhbWVudGkvUGFnYW1lbnRvU2VydmljZSc7XHJcbmltcG9ydCB7UGFnYW1lbnRvfSBmcm9tICdwYWdhbWVudGkvUGFnYW1lbnRvJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBsYXRlc3RQYXltZW50cyB7XHJcblxyXG4gICAgcGFnYW1lbnRpOiBQYWdhbWVudG9bXSA9IFtdO1xyXG4gICAgQGJpbmRhYmxlIHJlY29yZE51bWJlcjtcclxuICAgIEBiaW5kYWJsZSBzaG93Um93Q29tbWFuZHM6IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdhbWVudG9TZXJ2aWNlOiBQYWdhbWVudG9TZXJ2aWNlLCBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQsIHByaXZhdGUgZXZ0QWdnOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuICAgICAgICB0aGlzLnJlY29yZE51bWJlciA9IDMwO1xyXG4gICAgICAgIHRoaXMuc2hvd1Jvd0NvbW1hbmRzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZXZ0QWdnLnN1YnNjcmliZSgncGF5bWVudFVwZGF0ZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnYW1lbnRvU2VydmljZS51bHRpbWkodGhpcy5yZWNvcmROdW1iZXIpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdhbWVudGkgPSA8UGFnYW1lbnRvW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdhbWVudG9TZXJ2aWNlLnVsdGltaSh0aGlzLnJlY29yZE51bWJlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdhbWVudGkgPSA8UGFnYW1lbnRvW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlY29yZE51bWJlckNoYW5nZWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb2RpZmljYShwYWdhbWVudG86IFBhZ2FtZW50byk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgZSA9IG5ldyBDdXN0b21FdmVudCgnb24tbW9kaWZpY2EtcGFnYW1lbnRvJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IHBhZ2FtZW50byxcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWxsYShwYWdhbWVudG86IFBhZ2FtZW50byk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlID0gbmV3IEN1c3RvbUV2ZW50KCdvbi1jYW5jZWxsYS1wYWdhbWVudG8nLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDogcGFnYW1lbnRvLFxyXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICB9XHJcblxyXG59Il19