var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'commesse/Commessa', 'commesse/CommesseService'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, Commessa_1, CommesseService_1) {
    "use strict";
    var insCommessa = (function () {
        function insCommessa(http, commessaService, evtAgg) {
            this.http = http;
            this.commessaService = commessaService;
            this.evtAgg = evtAgg;
            this.commessaCorrente = new Commessa_1.Commessa();
        }
        insCommessa.prototype.registrazione = function () {
            //      this.fatturaService.aggiungi(this.fatturaCorrente).then((value) => {
            //	this.evtAgg.publish('fatturaAdded');
            //});
        };
        insCommessa = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient, CommesseService_1.CommesseService, aurelia_event_aggregator_1.EventAggregator])
        ], insCommessa);
        return insCommessa;
    }());
    exports.insCommessa = insCommessa;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zQ29tbWVzc2EuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvaW5zQ29tbWVzc2EudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRQTtRQUdJLHFCQUFvQixJQUFnQixFQUFVLGVBQWdDLEVBQVUsTUFBdUI7WUFBM0YsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBQzNHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUM5QyxDQUFDO1FBRVMsbUNBQWEsR0FBcEI7WUFDRiw0RUFBNEU7WUFDNUUsdUNBQXVDO1lBQ3ZDLEtBQUs7UUFDTixDQUFDO1FBWkY7WUFBQyw4QkFBVTs7dUJBQUE7UUFhWCxrQkFBQztJQUFELENBQUMsQUFaRCxJQVlDO0lBWlksbUJBQVcsY0FZdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuXHJcbmltcG9ydCB7Q29tbWVzc2F9IGZyb20gJ2NvbW1lc3NlL0NvbW1lc3NhJztcclxuaW1wb3J0IHtDb21tZXNzZVNlcnZpY2V9IGZyb20gJ2NvbW1lc3NlL0NvbW1lc3NlU2VydmljZSc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgaW5zQ29tbWVzc2Ege1xyXG4gICAgcHVibGljIGNvbW1lc3NhQ29ycmVudGU6IENvbW1lc3NhO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBjb21tZXNzYVNlcnZpY2U6IENvbW1lc3NlU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMuY29tbWVzc2FDb3JyZW50ZSA9IG5ldyBDb21tZXNzYSgpO1xyXG5cdH0gXHJcblx0XHJcbiAgICBwdWJsaWMgcmVnaXN0cmF6aW9uZSgpOiB2b2lkIHtcclxuICAvLyAgICAgIHRoaXMuZmF0dHVyYVNlcnZpY2UuYWdnaXVuZ2kodGhpcy5mYXR0dXJhQ29ycmVudGUpLnRoZW4oKHZhbHVlKSA9PiB7XHJcblx0XHQvL1x0dGhpcy5ldnRBZ2cucHVibGlzaCgnZmF0dHVyYUFkZGVkJyk7XHJcblx0XHQvL30pO1xyXG5cdH1cclxufSJdfQ==