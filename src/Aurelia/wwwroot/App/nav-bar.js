var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-authentication', 'aurelia-router', 'aurelia-event-aggregator', 'aurelia-api'], function (require, exports, aurelia_framework_1, aurelia_authentication_1, aurelia_router_1, aurelia_event_aggregator_1, aurelia_api_1) {
    "use strict";
    var NavBar = (function () {
        function NavBar(auth, bindingEngine, ea, config) {
            var _this = this;
            this.displayName = "";
            this.router = null;
            this.auth = null;
            this.bindingEngine = null;
            this.authChangedListener = function () {
                _this.updateDisplayName();
            };
            this.auth = auth;
            this.bindingEngine = bindingEngine;
            this.eventAggregator = ea;
            this.authConfig = config;
            this.updateDisplayName();
            this.subscription = this.eventAggregator.subscribe('authChanged', this.authChangedListener);
        }
        Object.defineProperty(NavBar.prototype, "isAuthenticated", {
            get: function () {
                return this.auth.authenticated;
            },
            enumerable: true,
            configurable: true
        });
        NavBar.prototype.updateDisplayName = function () {
            var _this = this;
            if (this.auth.authenticated) {
                this.auth.getMe().then(function (response) {
                    return _this.displayName = response.preferred_username;
                });
            }
            else {
                this.displayName = "";
            }
            ;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', aurelia_router_1.Router)
        ], NavBar.prototype, "router", void 0);
        __decorate([
            aurelia_framework_1.computedFrom('auth.authenticated'), 
            __metadata('design:type', Boolean)
        ], NavBar.prototype, "isAuthenticated", null);
        NavBar = __decorate([
            aurelia_framework_1.inject(aurelia_authentication_1.AuthService, aurelia_framework_1.BindingEngine, aurelia_event_aggregator_1.EventAggregator, aurelia_api_1.Config), 
            __metadata('design:paramtypes', [Object, Object, Object, Object])
        ], NavBar);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9uYXYtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUE7UUFTSSxnQkFBWSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNO1lBVC9DLGlCQXFDQztZQXBDRyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztZQUNmLFdBQU0sR0FBVyxJQUFJLENBQUM7WUFJeEIsU0FBSSxHQUFnQixJQUFJLENBQUM7WUFDekIsa0JBQWEsR0FBa0IsSUFBSSxDQUFDO1lBWTVDLHdCQUFtQixHQUFHO2dCQUNsQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUM3QixDQUFDLENBQUE7WUFYRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztZQUN6QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUV6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBT0Qsc0JBQUksbUNBQWU7aUJBQW5CO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUNuQyxDQUFDOzs7V0FBQTtRQUVPLGtDQUFpQixHQUF6QjtZQUFBLGlCQVFDO1lBUEcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7b0JBQzNCLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDMUQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDMUIsQ0FBQztZQUFBLENBQUM7UUFDTixDQUFDO1FBbENEO1lBQUMsNEJBQVE7OzhDQUFBO1FBcUJUO1lBQUMsZ0NBQVksQ0FBQyxvQkFBb0IsQ0FBQzs7cURBQUE7UUF4QnZDO1lBQUMsMEJBQU0sQ0FBQyxvQ0FBVyxFQUFFLGlDQUFhLEVBQUUsMENBQWUsRUFBRSxvQkFBTSxDQUFDOztrQkFBQTtRQXNDNUQsYUFBQztJQUFELENBQUMsQUFyQ0QsSUFxQ0M7SUFyQ1ksY0FBTSxTQXFDbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgQmluZGluZ0VuZ2luZSwgY29tcHV0ZWRGcm9tIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuaW1wb3J0IHtTdWJzY3JpcHRpb24sIEV2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtDb25maWcsIFJlc3R9IGZyb20gJ2F1cmVsaWEtYXBpJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AaW5qZWN0KEF1dGhTZXJ2aWNlLCBCaW5kaW5nRW5naW5lLCBFdmVudEFnZ3JlZ2F0b3IsIENvbmZpZylcclxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIEBiaW5kYWJsZSByb3V0ZXI6IFJvdXRlciA9IG51bGw7XHJcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yO1xyXG4gICAgYXV0aENvbmZpZzogQ29uZmlnO1xyXG4gICAgcHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJpbmRpbmdFbmdpbmU6IEJpbmRpbmdFbmdpbmUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF1dGgsIGJpbmRpbmdFbmdpbmUsIGVhLCBjb25maWcpIHtcclxuICAgICAgICB0aGlzLmF1dGggPSBhdXRoO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ0VuZ2luZSA9IGJpbmRpbmdFbmdpbmU7XHJcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBlYTtcclxuICAgICAgICB0aGlzLmF1dGhDb25maWcgPSBjb25maWc7IFxyXG4gICAgICAgIHRoaXMudXBkYXRlRGlzcGxheU5hbWUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2F1dGhDaGFuZ2VkJywgdGhpcy5hdXRoQ2hhbmdlZExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRoQ2hhbmdlZExpc3RlbmVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGlzcGxheU5hbWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBAY29tcHV0ZWRGcm9tKCdhdXRoLmF1dGhlbnRpY2F0ZWQnKVxyXG4gICAgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRGlzcGxheU5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aC5nZXRNZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWUgPSByZXNwb25zZS5wcmVmZXJyZWRfdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=