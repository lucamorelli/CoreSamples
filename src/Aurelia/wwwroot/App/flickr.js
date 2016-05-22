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
    //@inject(HttpClient)
    var Flickr = (function () {
        //    http: HttpClient;
        function Flickr(http) {
            this.http = http;
            this.heading = 'Flickr';
            this.images = [];
            this.url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';
            //    constructor(http: HttpClient) {
            //    this.http = http;
        }
        Flickr.prototype.activate = function () {
            var _this = this;
            return this.http.jsonp(this.url).then(function (response) {
                _this.images = response.content.items;
            });
        };
        Flickr.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave?');
        };
        Flickr = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], Flickr);
        return Flickr;
    }());
    exports.Flickr = Flickr;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpY2tyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2ZsaWNrci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlBLHFCQUFxQjtJQUVyQjtRQUlBLHVCQUF1QjtRQUVuQixnQkFBbUIsSUFBZTtZQUFmLFNBQUksR0FBSixJQUFJLENBQVc7WUFMbEMsWUFBTyxHQUFHLFFBQVEsQ0FBQztZQUNuQixXQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ1osUUFBRyxHQUFHLDZGQUE2RixDQUFDO1lBSXhHLHFDQUFxQztZQUNqQyx1QkFBdUI7UUFDdkIsQ0FBQztRQUVELHlCQUFRLEdBQVI7WUFBQSxpQkFJQztZQUhHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDMUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCw4QkFBYSxHQUFiO1lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFwQkw7WUFBQyw4QkFBVTs7a0JBQUE7UUFxQlgsYUFBQztJQUFELENBQUMsQUFwQkQsSUFvQkM7SUFwQlksY0FBTSxTQW9CbEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5cclxuLy9AaW5qZWN0KEh0dHBDbGllbnQpXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBGbGlja3Ige1xyXG4gICAgaGVhZGluZyA9ICdGbGlja3InO1xyXG4gICAgaW1hZ2VzID0gW107XHJcbiAgICB1cmwgPSAnaHR0cDovL2FwaS5mbGlja3IuY29tL3NlcnZpY2VzL2ZlZWRzL3Bob3Rvc19wdWJsaWMuZ25lP3RhZ3M9cmFpbmllciZ0YWdtb2RlPWFueSZmb3JtYXQ9anNvbic7XHJcbi8vICAgIGh0dHA6IEh0dHBDbGllbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6SHR0cENsaWVudCl7XHJcbi8vICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgIC8vICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9IFxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuanNvbnAodGhpcy51cmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlcyA9IHJlc3BvbnNlLmNvbnRlbnQuaXRlbXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPycpO1xyXG4gICAgfVxyXG59Il19