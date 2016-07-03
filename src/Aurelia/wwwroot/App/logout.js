var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-authentication', 'aurelia-dependency-injection', 'aurelia-event-aggregator'], function (require, exports, aurelia_authentication_1, aurelia_dependency_injection_1, aurelia_event_aggregator_1) {
    "use strict";
    var Logout = (function () {
        function Logout(authService, eventAggregator) {
            this.authService = null;
            this.authService = authService;
            this.eventAggregator = eventAggregator;
        }
        ;
        Logout.prototype.activate = function () {
            var _this = this;
            this.authService.logout("#/login")
                .then(function (response) {
                console.log("ok logged out on  logout.js");
                _this.eventAggregator.publish('authChanged');
            })
                .catch(function (err) {
                console.log("error logged out  logout.js");
            });
        };
        Logout = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_authentication_1.AuthService, aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [Object, Object])
        ], Logout);
        return Logout;
    }());
    exports.Logout = Logout;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2xvZ291dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBSUksZ0JBQVksV0FBVyxFQUFFLGVBQWU7WUFIeEMsZ0JBQVcsR0FBZ0IsSUFBSSxDQUFDO1lBSTVCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQzNDLENBQUM7O1FBRUQseUJBQVEsR0FBUjtZQUFBLGlCQVVDO1lBVEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO2lCQUM3QixJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQztnQkFDM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBRS9DLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQXBCTDtZQUFDLHFDQUFNLENBQUMsb0NBQVcsRUFBRSwwQ0FBZSxDQUFDOztrQkFBQTtRQXFCckMsYUFBQztJQUFELENBQUMsQUFwQkQsSUFvQkM7SUFwQlksY0FBTSxTQW9CbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbkBpbmplY3QoQXV0aFNlcnZpY2UsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBMb2dvdXQge1xuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSA9IG51bGw7XG4gICAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoU2VydmljZSwgZXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UgPSBhdXRoU2VydmljZTtcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgfTtcblxuICAgIGFjdGl2YXRlKCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dChcIiMvbG9naW5cIilcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rIGxvZ2dlZCBvdXQgb24gIGxvZ291dC5qc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdhdXRoQ2hhbmdlZCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgbG9nZ2VkIG91dCAgbG9nb3V0LmpzXCIpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59Il19