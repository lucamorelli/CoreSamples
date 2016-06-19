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
    var CommesseService = (function () {
        function CommesseService(http) {
            this.http = http;
            this.url = "api/Commessa";
        }
        CommesseService.prototype.getCommesseOperative = function (idCliente) {
            return this.http.get(this.url + "/ListaOperative/" + idCliente);
        };
        CommesseService.prototype.ultime = function (numRecord) {
            return this.http.get(this.url + "/ultimi/" + numRecord);
        };
        CommesseService.prototype.nonTerminate = function () {
            return this.http.get(this.url + "/nonterminate");
        };
        CommesseService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], CommesseService);
        return CommesseService;
    }());
    exports.CommesseService = CommesseService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVzc2VTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbW1lc3NlL0NvbW1lc3NlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0kseUJBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLGNBQWMsQ0FBQztRQUlyQyxDQUFDO1FBRU0sOENBQW9CLEdBQTNCLFVBQTRCLFNBQWlCO1lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLENBQUM7UUFFTSxnQ0FBTSxHQUFiLFVBQWMsU0FBaUI7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFTSxzQ0FBWSxHQUFuQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFsQkw7WUFBQyw4QkFBVTs7MkJBQUE7UUFvQlgsc0JBQUM7SUFBRCxDQUFDLEFBbkJELElBbUJDO0lBbkJZLHVCQUFlLGtCQW1CM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbWVzc2F9IGZyb20gJ0NvbW1lc3NhJztcclxuaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7SHR0cFJlc3BvbnNlTWVzc2FnZX0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQ29tbWVzc2VTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcgPSBcImFwaS9Db21tZXNzYVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb21tZXNzZU9wZXJhdGl2ZShpZENsaWVudGU6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvTGlzdGFPcGVyYXRpdmUvXCIgKyBpZENsaWVudGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1bHRpbWUobnVtUmVjb3JkOiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL3VsdGltaS9cIiArIG51bVJlY29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5vblRlcm1pbmF0ZSgpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL25vbnRlcm1pbmF0ZVwiKTtcclxuICAgIH1cclxuXHJcbn0iXX0=