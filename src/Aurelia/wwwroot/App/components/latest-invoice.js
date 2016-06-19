var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'fatture/FatturaService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, FatturaService_1) {
    "use strict";
    var latestInvoice = (function () {
        function latestInvoice(fatturaService) {
            this.fatturaService = fatturaService;
            this.fatture = [];
        }
        latestInvoice.prototype.bind = function () {
            var _this = this;
            console.log(this.recordNumber);
            this.fatturaService.fattureRecenti(this.recordNumber)
                .then(function (response) {
                _this.fatture = response.content;
            });
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Object)
        ], latestInvoice.prototype, "recordNumber", void 0);
        latestInvoice = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [FatturaService_1.FatturaService])
        ], latestInvoice);
        return latestInvoice;
    }());
    exports.latestInvoice = latestInvoice;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LWludm9pY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvY29tcG9uZW50cy9sYXRlc3QtaW52b2ljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFBO1FBS0ksdUJBQW9CLGNBQThCO1lBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtZQUhsRCxZQUFPLEdBQWdCLEVBQUUsQ0FBQztRQUkxQixDQUFDO1FBRUQsNEJBQUksR0FBSjtZQUFBLGlCQU9DO1lBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDaEQsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsT0FBTyxHQUFnQixRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRVgsQ0FBQztRQVpEO1lBQUMsNEJBQVE7OzJEQUFBO1FBSmI7WUFBQyw4QkFBVTs7eUJBQUE7UUFpQlgsb0JBQUM7SUFBRCxDQUFDLEFBaEJELElBZ0JDO0lBaEJZLHFCQUFhLGdCQWdCekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7YmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmltcG9ydCB7RmF0dHVyYVNlcnZpY2V9IGZyb20gJ2ZhdHR1cmUvRmF0dHVyYVNlcnZpY2UnO1xyXG5pbXBvcnQge0ZhdHR1cmFWbX0gZnJvbSAnZmF0dHVyZS9GYXR0dXJhVm0nO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGxhdGVzdEludm9pY2Uge1xyXG5cclxuICAgIGZhdHR1cmU6IEZhdHR1cmFWbVtdID0gW107XHJcbiAgICBAYmluZGFibGUgcmVjb3JkTnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmF0dHVyYVNlcnZpY2U6IEZhdHR1cmFTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlY29yZE51bWJlcik7XHJcbiAgICAgICAgdGhpcy5mYXR0dXJhU2VydmljZS5mYXR0dXJlUmVjZW50aSh0aGlzLnJlY29yZE51bWJlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mYXR0dXJlID0gPEZhdHR1cmFWbVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==