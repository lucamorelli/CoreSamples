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
    var customerProject = (function () {
        function customerProject(progettoService, evtAgg) {
            var _this = this;
            this.progettoService = progettoService;
            this.evtAgg = evtAgg;
            this.progetti = [];
            this.evtAgg.subscribe('customerChanged', function (idCliente) {
                _this.progettoService.attiviCliente(idCliente)
                    .then(function (response) {
                    _this.progetti = response.content;
                });
            });
        }
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], customerProject.prototype, "progettoCorrente", void 0);
        customerProject = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [ProgettoService_1.ProgettoService, aurelia_event_aggregator_1.EventAggregator])
        ], customerProject);
        return customerProject;
    }());
    exports.customerProject = customerProject;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9jb21wb25lbnRzL2N1c3RvbWVyLXByb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRQTtRQUtJLHlCQUFvQixlQUFnQyxFQUFVLE1BQXVCO1lBTHpGLGlCQWFDO1lBUnVCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBSHJGLGFBQVEsR0FBZSxFQUFFLENBQUM7WUFJdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxTQUFTO2dCQUMvQyxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7cUJBQ3hDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQ1YsS0FBSSxDQUFDLFFBQVEsR0FBZSxRQUFRLENBQUMsT0FBTyxDQUFDO2dCQUNqRCxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQVREO1lBQUMsNEJBQVE7O2lFQUFBO1FBSmI7WUFBQyw4QkFBVTs7MkJBQUE7UUFjWCxzQkFBQztJQUFELENBQUMsQUFiRCxJQWFDO0lBYlksdUJBQWUsa0JBYTNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7UHJvZ2V0dG99IGZyb20gJy4uL3Byb2dldHRpL1Byb2dldHRvJztcclxuaW1wb3J0IHtQcm9nZXR0b1NlcnZpY2V9IGZyb20gJy4uL3Byb2dldHRpL1Byb2dldHRvU2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgY3VzdG9tZXJQcm9qZWN0IHtcclxuXHJcbiAgICBwcm9nZXR0aTogUHJvZ2V0dG9bXSA9IFtdO1xyXG4gICAgQGJpbmRhYmxlIHByb2dldHRvQ29ycmVudGU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb2dldHRvU2VydmljZTogUHJvZ2V0dG9TZXJ2aWNlLCBwcml2YXRlIGV2dEFnZzogRXZlbnRBZ2dyZWdhdG9yKSB7XHJcbiAgICAgICAgdGhpcy5ldnRBZ2cuc3Vic2NyaWJlKCdjdXN0b21lckNoYW5nZWQnLCAoaWRDbGllbnRlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ2V0dG9TZXJ2aWNlLmF0dGl2aUNsaWVudGUoaWRDbGllbnRlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ2V0dGkgPSA8UHJvZ2V0dG9bXT5yZXNwb25zZS5jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=