var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'tabelle/TabelleService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, TabelleService_1) {
    "use strict";
    //@logClass
    var activityType = (function () {
        function activityType(tabelleService) {
            var _this = this;
            this.tabelleService = tabelleService;
            //    @logProperty
            this.tipi = [];
            this.tabelleService.getTipiAttivita()
                .then(function (response) {
                _this.tipi = response.content;
            });
            this.Multiply(5);
        }
        //    @logMethod
        activityType.prototype.Multiply = function (value) {
            return value * 2;
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], activityType.prototype, "tipoAttivitaCorrente", void 0);
        activityType = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [TabelleService_1.TabelleService])
        ], activityType);
        return activityType;
    }());
    exports.activityType = activityType;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHktdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9jb21wb25lbnRzL2FjdGl2aXR5LXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFVQSxXQUFXO0lBRVg7UUFRSSxzQkFBb0IsY0FBOEI7WUFSdEQsaUJBc0JDO1lBZHVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtZQUx0RCxrQkFBa0I7WUFDZCxTQUFJLEdBQW1CLEVBQUUsQ0FBQztZQUt0QixJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRTtpQkFDaEMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsSUFBSSxHQUFtQixRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1lBRVAsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBRUwsZ0JBQWdCO1FBQ0wsK0JBQVEsR0FBZixVQUFnQixLQUFhO1lBQ3pCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFkRDtZQUFDLDRCQUFROztrRUFBQTtRQVBiO1lBQUMsOEJBQVU7O3dCQUFBO1FBdUJYLG1CQUFDO0lBQUQsQ0FBQyxBQXRCRCxJQXNCQztJQXRCWSxvQkFBWSxlQXNCeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5pbXBvcnQge1RpcG9BdHRpdml0YX0gZnJvbSAndGFiZWxsZS9UaXBvQXR0aXZpdGEnO1xyXG5pbXBvcnQge1RhYmVsbGVTZXJ2aWNlfSBmcm9tICd0YWJlbGxlL1RhYmVsbGVTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7bG9nTWV0aG9kfSBmcm9tICcuLi9IZWxwZXJzL0RlY29yYXRvcnMnO1xyXG5pbXBvcnQge2xvZ1Byb3BlcnR5fSBmcm9tICcuLi9IZWxwZXJzL0RlY29yYXRvcnMnO1xyXG5pbXBvcnQge2xvZ0NsYXNzfSBmcm9tICcuLi9IZWxwZXJzL0RlY29yYXRvcnMnO1xyXG5cclxuLy9AbG9nQ2xhc3NcclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGFjdGl2aXR5VHlwZSB7XHJcblxyXG5cclxuLy8gICAgQGxvZ1Byb3BlcnR5XHJcbiAgICB0aXBpOiBUaXBvQXR0aXZpdGFbXSA9IFtdO1xyXG5cclxuICAgIEBiaW5kYWJsZSB0aXBvQXR0aXZpdGFDb3JyZW50ZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFiZWxsZVNlcnZpY2U6IFRhYmVsbGVTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy50YWJlbGxlU2VydmljZS5nZXRUaXBpQXR0aXZpdGEoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpcGkgPSA8VGlwb0F0dGl2aXRhW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuTXVsdGlwbHkoNSk7XHJcbiAgICB9XHJcblxyXG4vLyAgICBAbG9nTWV0aG9kXHJcbiAgICBwdWJsaWMgTXVsdGlwbHkodmFsdWU6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICogMjtcclxuICAgIH1cclxuXHJcbn0iXX0=