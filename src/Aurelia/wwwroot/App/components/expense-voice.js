var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', '../spese/SpeseService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, SpeseService_1) {
    "use strict";
    var expenseVoice = (function () {
        function expenseVoice(speseService, evtAgg) {
            var _this = this;
            this.speseService = speseService;
            this.evtAgg = evtAgg;
            this.vociSpesa = [];
            this.speseService.listaVoci().then(function (response) {
                _this.vociSpesa = response.content;
            });
        }
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], expenseVoice.prototype, "voceCorrente", void 0);
        expenseVoice = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [SpeseService_1.SpeseService, aurelia_event_aggregator_1.EventAggregator])
        ], expenseVoice);
        return expenseVoice;
    }());
    exports.expenseVoice = expenseVoice;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZS12b2ljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9jb21wb25lbnRzL2V4cGVuc2Utdm9pY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRQTtRQUtJLHNCQUFvQixZQUEwQixFQUFVLE1BQXVCO1lBTG5GLGlCQVdDO1lBTnVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7WUFIL0UsY0FBUyxHQUFnQixFQUFFLENBQUM7WUFLeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUN2QyxLQUFJLENBQUMsU0FBUyxHQUFnQixRQUFRLENBQUMsT0FBTyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQVBEO1lBQUMsNEJBQVE7OzBEQUFBO1FBSmI7WUFBQyw4QkFBVTs7d0JBQUE7UUFZWCxtQkFBQztJQUFELENBQUMsQUFYRCxJQVdDO0lBWFksb0JBQVksZUFXeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHtWb2NlU3Blc2F9IGZyb20gJ3NwZXNlL1ZvY2VTcGVzYSc7XHJcbmltcG9ydCB7U3Blc2VTZXJ2aWNlfSBmcm9tICcuLi9zcGVzZS9TcGVzZVNlcnZpY2UnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGV4cGVuc2VWb2ljZSB7XHJcblxyXG4gICAgdm9jaVNwZXNhOiBWb2NlU3Blc2FbXSA9IFtdO1xyXG4gICAgQGJpbmRhYmxlIHZvY2VDb3JyZW50ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Blc2VTZXJ2aWNlOiBTcGVzZVNlcnZpY2UsIHByaXZhdGUgZXZ0QWdnOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zcGVzZVNlcnZpY2UubGlzdGFWb2NpKCkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudm9jaVNwZXNhID0gPFZvY2VTcGVzYVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19