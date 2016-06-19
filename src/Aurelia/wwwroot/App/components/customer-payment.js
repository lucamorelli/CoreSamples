var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', '../pagamenti/PagamentoService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, PagamentoService_1) {
    "use strict";
    var customerPayment = (function () {
        function customerPayment(pagamentoService, evtAgg) {
            var _this = this;
            this.pagamentoService = pagamentoService;
            this.evtAgg = evtAgg;
            this.pagamenti = [];
            this.evtAgg.subscribe('customerChanged', function (idCliente) {
                _this.pagamentoService.pagamentiCliente(idCliente)
                    .then(function (response) {
                    _this.pagamenti = response.content;
                });
            });
        }
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], customerPayment.prototype, "pagamentoCorrente", void 0);
        customerPayment = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [PagamentoService_1.PagamentoService, aurelia_event_aggregator_1.EventAggregator])
        ], customerPayment);
        return customerPayment;
    }());
    exports.customerPayment = customerPayment;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9jb21wb25lbnRzL2N1c3RvbWVyLXBheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRQTtRQUtJLHlCQUFvQixnQkFBa0MsRUFBVSxNQUF1QjtZQUwzRixpQkFhQztZQVJ1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7WUFIdkYsY0FBUyxHQUFnQixFQUFFLENBQUM7WUFJeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxTQUFTO2dCQUMvQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO3FCQUM1QyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUNWLEtBQUksQ0FBQyxTQUFTLEdBQWdCLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQ25ELENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBVEQ7WUFBQyw0QkFBUTs7a0VBQUE7UUFKYjtZQUFDLDhCQUFVOzsyQkFBQTtRQWNYLHNCQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFiWSx1QkFBZSxrQkFhM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHtQYWdhbWVudG99IGZyb20gJy4uL3BhZ2FtZW50aS9QYWdhbWVudG8nO1xyXG5pbXBvcnQge1BhZ2FtZW50b1NlcnZpY2V9IGZyb20gJy4uL3BhZ2FtZW50aS9QYWdhbWVudG9TZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBjdXN0b21lclBheW1lbnQge1xyXG5cclxuICAgIHBhZ2FtZW50aTogUGFnYW1lbnRvW10gPSBbXTtcclxuICAgIEBiaW5kYWJsZSBwYWdhbWVudG9Db3JyZW50ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnYW1lbnRvU2VydmljZTogUGFnYW1lbnRvU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMuZXZ0QWdnLnN1YnNjcmliZSgnY3VzdG9tZXJDaGFuZ2VkJywgKGlkQ2xpZW50ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2FtZW50b1NlcnZpY2UucGFnYW1lbnRpQ2xpZW50ZShpZENsaWVudGUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdhbWVudGkgPSA8UGFnYW1lbnRvW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19