var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client'], function (require, exports, aurelia_framework_1, aurelia_http_client_1) {
    "use strict";
    var RegisterService = (function () {
        function RegisterService(http) {
            this.http = http;
            this.url = "Register";
        }
        RegisterService.prototype.signup = function (username, password, repeatPassword) {
            var model = {
                userId: username,
                password: password,
                repeatPassword: repeatPassword
            };
            return this.http.post(this.url + "/SignUp/", model);
        };
        RegisterService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], RegisterService);
        return RegisterService;
    }());
    exports.RegisterService = RegisterService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL3JlZ2lzdGVyL1JlZ2lzdGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0kseUJBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLFVBQVUsQ0FBQztRQUlqQyxDQUFDO1FBRU0sZ0NBQU0sR0FBYixVQUFjLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxjQUFzQjtZQUNwRSxJQUFJLEtBQUssR0FBc0I7Z0JBQzNCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsY0FBYyxFQUFFLGNBQWM7YUFDakMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBZkw7WUFBQyw4QkFBVTs7MkJBQUE7UUFnQlgsc0JBQUM7SUFBRCxDQUFDLEFBZkQsSUFlQztJQWZZLHVCQUFlLGtCQWUzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWdpc3RlclZpZXdNb2RlbH0gZnJvbSAnUmVnaXN0ZXJWaWV3TW9kZWwnO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtIdHRwUmVzcG9uc2VNZXNzYWdlfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiUmVnaXN0ZXJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2lnbnVwKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIHJlcGVhdFBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICB2YXIgbW9kZWw6IFJlZ2lzdGVyVmlld01vZGVsID0ge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsIFxyXG4gICAgICAgICAgICByZXBlYXRQYXNzd29yZDogcmVwZWF0UGFzc3dvcmRcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnVybCArIFwiL1NpZ25VcC9cIiwgbW9kZWwpO1xyXG4gICAgfVxyXG59Il19