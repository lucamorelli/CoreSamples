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
    var orderSelect = (function () {
        function orderSelect(commessaService, evtAgg) {
            this.commessaService = commessaService;
            this.evtAgg = evtAgg;
            this.commesse = [];
        }
        orderSelect.prototype.bind = function () {
            var _this = this;
            this.commessaService.nonTerminate()
                .then(function (response) {
                _this.commesse = response.content;
            });
        };
        orderSelect.prototype.idCommessaChanged = function () {
            //this.commesse.forEach(commessa => {
            //    if (commessa.CommessaNo == this.idCommessa)
            //        this.commessaCorrente = commessa;
            //});
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], orderSelect.prototype, "commessaCorrente", void 0);
        orderSelect = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [CommesseService_1.CommesseService, aurelia_event_aggregator_1.EventAggregator])
        ], orderSelect);
        return orderSelect;
    }());
    exports.orderSelect = orderSelect;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItc2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbXBvbmVudHMvb3JkZXItc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUE7UUFPSSxxQkFBb0IsZUFBZ0MsRUFBVSxNQUF1QjtZQUFqRSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUxyRixhQUFRLEdBQWUsRUFBRSxDQUFDO1FBTTFCLENBQUM7UUFFTSwwQkFBSSxHQUFYO1lBQUEsaUJBS0M7WUFKRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRTtpQkFDOUIsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsUUFBUSxHQUFlLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBRU0sdUNBQWlCLEdBQXhCO1lBQ0kscUNBQXFDO1lBQ3JDLGlEQUFpRDtZQUNqRCwyQ0FBMkM7WUFFM0MsS0FBSztRQUVULENBQUM7UUFuQkQ7WUFBQyw0QkFBUTs7NkRBQUE7UUFOYjtZQUFDLDhCQUFVOzt1QkFBQTtRQTBCWCxrQkFBQztJQUFELENBQUMsQUF6QkQsSUF5QkM7SUF6QlksbUJBQVcsY0F5QnZCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7Q29tbWVzc2F9IGZyb20gJy4uL2NvbW1lc3NlL0NvbW1lc3NhJztcclxuaW1wb3J0IHtDb21tZXNzZVNlcnZpY2V9IGZyb20gJy4uL2NvbW1lc3NlL0NvbW1lc3NlU2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3Mgb3JkZXJTZWxlY3Qge1xyXG5cclxuICAgIGNvbW1lc3NlOiBDb21tZXNzYVtdID0gW107XHJcblxyXG4gICAgLy9AYmluZGFibGUgaWRDb21tZXNzYTogbnVtYmVyO1xyXG4gICAgQGJpbmRhYmxlIGNvbW1lc3NhQ29ycmVudGU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1lc3NhU2VydmljZTogQ29tbWVzc2VTZXJ2aWNlLCBwcml2YXRlIGV2dEFnZzogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJpbmQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21tZXNzYVNlcnZpY2Uubm9uVGVybWluYXRlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZXNzZSA9IDxDb21tZXNzYVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpZENvbW1lc3NhQ2hhbmdlZCgpIHtcclxuICAgICAgICAvL3RoaXMuY29tbWVzc2UuZm9yRWFjaChjb21tZXNzYSA9PiB7XHJcbiAgICAgICAgLy8gICAgaWYgKGNvbW1lc3NhLkNvbW1lc3NhTm8gPT0gdGhpcy5pZENvbW1lc3NhKVxyXG4gICAgICAgIC8vICAgICAgICB0aGlzLmNvbW1lc3NhQ29ycmVudGUgPSBjb21tZXNzYTtcclxuXHJcbiAgICAgICAgLy99KTtcclxuXHJcbiAgICB9IFxyXG59Il19