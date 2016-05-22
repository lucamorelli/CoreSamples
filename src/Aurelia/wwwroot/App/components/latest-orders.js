var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'commesse/CommesseService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, CommesseService_1) {
    "use strict";
    var latestOrders = (function () {
        function latestOrders(commessaService) {
            this.commessaService = commessaService;
            this.commesse = [];
        }
        latestOrders.prototype.bind = function () {
            var _this = this;
            console.log(this.recordNumber);
            this.commessaService.ultime(this.recordNumber)
                .then(function (response) {
                _this.commesse = response.content;
            });
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Object)
        ], latestOrders.prototype, "recordNumber", void 0);
        latestOrders = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [CommesseService_1.CommesseService])
        ], latestOrders);
        return latestOrders;
    }());
    exports.latestOrders = latestOrders;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LW9yZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9jb21wb25lbnRzL2xhdGVzdC1vcmRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRQTtRQUtJLHNCQUFvQixlQUFnQztZQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFIcEQsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUkxQixDQUFDO1FBRUQsMkJBQUksR0FBSjtZQUFBLGlCQU9DO1lBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDekMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsUUFBUSxHQUFlLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFWCxDQUFDO1FBWkQ7WUFBQyw0QkFBUTs7MERBQUE7UUFKYjtZQUFDLDhCQUFVOzt3QkFBQTtRQWlCWCxtQkFBQztJQUFELENBQUMsQUFoQkQsSUFnQkM7SUFoQlksb0JBQVksZUFnQnhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQge0NvbW1lc3NlU2VydmljZX0gZnJvbSAnY29tbWVzc2UvQ29tbWVzc2VTZXJ2aWNlJztcclxuaW1wb3J0IHtDb21tZXNzYX0gZnJvbSAnY29tbWVzc2UvQ29tbWVzc2EnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGxhdGVzdE9yZGVycyB7XHJcblxyXG4gICAgY29tbWVzc2U6IENvbW1lc3NhW10gPSBbXTtcclxuICAgIEBiaW5kYWJsZSByZWNvcmROdW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21tZXNzYVNlcnZpY2U6IENvbW1lc3NlU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5yZWNvcmROdW1iZXIpO1xyXG4gICAgICAgIHRoaXMuY29tbWVzc2FTZXJ2aWNlLnVsdGltZSh0aGlzLnJlY29yZE51bWJlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZXNzZSA9IDxDb21tZXNzYVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSJdfQ==