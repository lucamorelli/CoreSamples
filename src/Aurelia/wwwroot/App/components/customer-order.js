var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', '../commesse/CommesseService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, CommesseService_1) {
    "use strict";
    var customerOrder = (function () {
        function customerOrder(commessaService, evtAgg) {
            var _this = this;
            this.commessaService = commessaService;
            this.evtAgg = evtAgg;
            this.commesse = [];
            this.evtAgg.subscribe('customerChanged', function (idCliente) {
                _this.commessaService.getCommesseOperative(idCliente)
                    .then(function (response) {
                    _this.commesse = response.content;
                });
            });
        }
        customerOrder.prototype.idCommessaChanged = function () {
            //this.commesse.forEach(commessa => {
            //    if (commessa.CommessaNo == this.idCommessa)
            //        this.commessaCorrente = commessa;
            //});
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], customerOrder.prototype, "commessaCorrente", void 0);
        customerOrder = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [CommesseService_1.CommesseService, aurelia_event_aggregator_1.EventAggregator])
        ], customerOrder);
        return customerOrder;
    }());
    exports.customerOrder = customerOrder;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItb3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvY29tcG9uZW50cy9jdXN0b21lci1vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFBO1FBT0ksdUJBQW9CLGVBQWdDLEVBQVUsTUFBdUI7WUFQekYsaUJBd0JDO1lBakJ1QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUxyRixhQUFRLEdBQWUsRUFBRSxDQUFDO1lBTXRCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLFVBQUMsU0FBUztnQkFDL0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUM7cUJBQy9DLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBZSxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVNLHlDQUFpQixHQUF4QjtZQUNJLHFDQUFxQztZQUNyQyxpREFBaUQ7WUFDakQsMkNBQTJDO1lBRTNDLEtBQUs7UUFFVCxDQUFDO1FBbEJEO1lBQUMsNEJBQVE7OytEQUFBO1FBTmI7WUFBQyw4QkFBVTs7eUJBQUE7UUF5Qlgsb0JBQUM7SUFBRCxDQUFDLEFBeEJELElBd0JDO0lBeEJZLHFCQUFhLGdCQXdCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHtDb21tZXNzYX0gZnJvbSAnLi4vY29tbWVzc2UvQ29tbWVzc2EnO1xyXG5pbXBvcnQge0NvbW1lc3NlU2VydmljZX0gZnJvbSAnLi4vY29tbWVzc2UvQ29tbWVzc2VTZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBjdXN0b21lck9yZGVyIHtcclxuXHJcbiAgICBjb21tZXNzZTogQ29tbWVzc2FbXSA9IFtdO1xyXG5cclxuICAgIC8vQGJpbmRhYmxlIGlkQ29tbWVzc2E6IG51bWJlcjtcclxuICAgIEBiaW5kYWJsZSBjb21tZXNzYUNvcnJlbnRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tZXNzYVNlcnZpY2U6IENvbW1lc3NlU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMuZXZ0QWdnLnN1YnNjcmliZSgnY3VzdG9tZXJDaGFuZ2VkJywgKGlkQ2xpZW50ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbW1lc3NhU2VydmljZS5nZXRDb21tZXNzZU9wZXJhdGl2ZShpZENsaWVudGUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tZXNzZSA9IDxDb21tZXNzYVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaWRDb21tZXNzYUNoYW5nZWQoKSB7XHJcbiAgICAgICAgLy90aGlzLmNvbW1lc3NlLmZvckVhY2goY29tbWVzc2EgPT4ge1xyXG4gICAgICAgIC8vICAgIGlmIChjb21tZXNzYS5Db21tZXNzYU5vID09IHRoaXMuaWRDb21tZXNzYSlcclxuICAgICAgICAvLyAgICAgICAgdGhpcy5jb21tZXNzYUNvcnJlbnRlID0gY29tbWVzc2E7XHJcblxyXG4gICAgICAgIC8vfSk7XHJcblxyXG4gICAgfSBcclxufSJdfQ==