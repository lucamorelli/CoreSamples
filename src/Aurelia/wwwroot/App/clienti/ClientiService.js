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
    var ClientiService = (function () {
        function ClientiService(http) {
            this.http = http;
            //@logProperty
            this.url = "api/Cliente/";
        }
        ClientiService.prototype.getClienti = function () {
            return this.http.get(this.url + "Lista");
        };
        ClientiService.prototype.getCliente = function (idCliente) {
            return this.http.get(this.url + idCliente);
        };
        ClientiService.prototype.getLocazioni = function (idCliente) {
            return this.http.get(this.url + "Locazioni/" + idCliente);
        };
        ClientiService.prototype.getAttivi = function () {
            return this.http.get(this.url + "Attivi");
        };
        ClientiService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], ClientiService);
        return ClientiService;
    }());
    exports.ClientiService = ClientiService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xpZW50aVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvY2xpZW50aS9DbGllbnRpU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFBO1FBSUksd0JBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFIbkMsY0FBYztZQUNOLFFBQUcsR0FBVyxjQUFjLENBQUM7UUFJckMsQ0FBQztRQUVNLG1DQUFVLEdBQWpCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVNLG1DQUFVLEdBQWpCLFVBQWtCLFNBQWlCO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFHTSxxQ0FBWSxHQUFuQixVQUFvQixTQUFpQjtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVNLGtDQUFTLEdBQWhCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQXhCTDtZQUFDLDhCQUFVOzswQkFBQTtRQTBCWCxxQkFBQztJQUFELENBQUMsQUF6QkQsSUF5QkM7SUF6Qlksc0JBQWMsaUJBeUIxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHtDbGllbnRlfSBmcm9tICdDbGllbnRlJztcclxuaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7SHR0cFJlc3BvbnNlTWVzc2FnZX0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7bG9nUHJvcGVydHl9IGZyb20gJ2hlbHBlcnMvZGVjb3JhdG9ycyc7XHJcblxyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIENsaWVudGlTZXJ2aWNlIHtcclxuICAgIC8vQGxvZ1Byb3BlcnR5XHJcbiAgICBwcml2YXRlIHVybDogc3RyaW5nID0gXCJhcGkvQ2xpZW50ZS9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH0gXHJcblxyXG4gICAgcHVibGljIGdldENsaWVudGkoKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPntcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiTGlzdGFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENsaWVudGUoaWRDbGllbnRlOiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIGlkQ2xpZW50ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRMb2NhemlvbmkoaWRDbGllbnRlOiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiTG9jYXppb25pL1wiICsgaWRDbGllbnRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0QXR0aXZpKCk6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCJBdHRpdmlcIik7XHJcbiAgICB9XHJcblxyXG59Il19