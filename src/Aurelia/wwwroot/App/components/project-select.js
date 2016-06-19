var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', '../progetti/ProgettoService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, ProgettoService_1) {
    "use strict";
    var projectSelect = (function () {
        function projectSelect(progettoService, evtAgg) {
            this.progettoService = progettoService;
            this.evtAgg = evtAgg;
            this.progetti = [];
        }
        projectSelect.prototype.bind = function () {
            var _this = this;
            this.progettoService.attivi()
                .then(function (response) {
                _this.progetti = response.content;
            });
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], projectSelect.prototype, "progettoCorrente", void 0);
        projectSelect = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [ProgettoService_1.ProgettoService, aurelia_event_aggregator_1.EventAggregator])
        ], projectSelect);
        return projectSelect;
    }());
    exports.projectSelect = projectSelect;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC1zZWxlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvY29tcG9uZW50cy9wcm9qZWN0LXNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFBO1FBS0ksdUJBQW9CLGVBQWdDLEVBQVUsTUFBdUI7WUFBakUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7WUFIckYsYUFBUSxHQUFlLEVBQUUsQ0FBQztRQUkxQixDQUFDO1FBRU0sNEJBQUksR0FBWDtZQUFBLGlCQUtDO1lBSkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7aUJBQ3hCLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBZSxRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQVZEO1lBQUMsNEJBQVE7OytEQUFBO1FBSmI7WUFBQyw4QkFBVTs7eUJBQUE7UUFlWCxvQkFBQztJQUFELENBQUMsQUFkRCxJQWNDO0lBZFkscUJBQWEsZ0JBY3pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7UHJvZ2V0dG99IGZyb20gJy4uL3Byb2dldHRpL1Byb2dldHRvJztcclxuaW1wb3J0IHtQcm9nZXR0b1NlcnZpY2V9IGZyb20gJy4uL3Byb2dldHRpL1Byb2dldHRvU2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgcHJvamVjdFNlbGVjdCB7XHJcblxyXG4gICAgcHJvZ2V0dGk6IFByb2dldHRvW10gPSBbXTtcclxuICAgIEBiaW5kYWJsZSBwcm9nZXR0b0NvcnJlbnRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwcm9nZXR0b1NlcnZpY2U6IFByb2dldHRvU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ2V0dG9TZXJ2aWNlLmF0dGl2aSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ2V0dGkgPSA8UHJvZ2V0dG9bXT5yZXNwb25zZS5jb250ZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==