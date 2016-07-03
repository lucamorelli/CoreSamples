var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'register/RegisterService', 'aurelia-dependency-injection', 'aurelia-event-aggregator'], function (require, exports, RegisterService_1, aurelia_dependency_injection_1, aurelia_event_aggregator_1) {
    "use strict";
    var Signup = (function () {
        function Signup(auth, eventAggregator) {
            this.heading = 'Sign Up';
            this.auth = auth;
            this.eventAggregator = eventAggregator;
        }
        ;
        Signup.prototype.signup = function () {
            var _this = this;
            if (this.username == '') {
                alert('inserire la mail');
                return;
            }
            if (this.password == '') {
                alert('inserire la password');
                return;
            }
            if (this.repeatPassword == '') {
                alert('inserire la password di conferma');
                return;
            }
            if (this.password != this.repeatPassword) {
                alert('le password non corrispondono');
                return;
            }
            return this.auth.signup(this.username, this.password, this.repeatPassword)
                .then(function (response) {
                console.log("success logged " + response);
                _this.eventAggregator.publish('authChanged');
            })
                .catch(function (err) {
                alert(err);
                //console.log("login failure : " + e.message);
            });
        };
        ;
        Signup = __decorate([
            aurelia_dependency_injection_1.inject(RegisterService_1.RegisterService, aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [RegisterService_1.RegisterService, aurelia_event_aggregator_1.EventAggregator])
        ], Signup);
        return Signup;
    }());
    exports.Signup = Signup;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3NpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBUUksZ0JBQVksSUFBcUIsRUFBRSxlQUFnQztZQUhuRSxZQUFPLEdBQVcsU0FBUyxDQUFDO1lBSXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQzNDLENBQUM7O1FBRUQsdUJBQU0sR0FBTjtZQUFBLGlCQTRCQztZQTNCRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDOUIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7Z0JBQzFDLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQztpQkFDckUsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUMxQyxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNoRCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDTixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ1AsOENBQThDO1lBRXRELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQzs7UUExQ0w7WUFBQyxxQ0FBTSxDQUFDLGlDQUFlLEVBQUUsMENBQWUsQ0FBQzs7a0JBQUE7UUEyQ3pDLGFBQUM7SUFBRCxDQUFDLEFBMUNELElBMENDO0lBMUNZLGNBQU0sU0EwQ2xCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlZ2lzdGVyU2VydmljZX0gZnJvbSAncmVnaXN0ZXIvUmVnaXN0ZXJTZXJ2aWNlJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuXG5AaW5qZWN0KFJlZ2lzdGVyU2VydmljZSwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIFNpZ251cCB7XG4gICAgYXV0aDogUmVnaXN0ZXJTZXJ2aWNlO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByZXBlYXRQYXNzd29yZDogc3RyaW5nO1xuICAgIGhlYWRpbmc6IHN0cmluZyA9ICdTaWduIFVwJztcbiAgICBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcjtcblxuICAgIGNvbnN0cnVjdG9yKGF1dGg6IFJlZ2lzdGVyU2VydmljZSwgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgfTtcblxuICAgIHNpZ251cCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWUgPT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdpbnNlcmlyZSBsYSBtYWlsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQgPT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdpbnNlcmlyZSBsYSBwYXNzd29yZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlcGVhdFBhc3N3b3JkID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnaW5zZXJpcmUgbGEgcGFzc3dvcmQgZGkgY29uZmVybWEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPSB0aGlzLnJlcGVhdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBhbGVydCgnbGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm8nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguc2lnbnVwKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQsIHRoaXMucmVwZWF0UGFzc3dvcmQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGxvZ2dlZCBcIiArIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdhdXRoQ2hhbmdlZCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJsb2dpbiBmYWlsdXJlIDogXCIgKyBlLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuIl19