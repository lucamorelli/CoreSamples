var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var Fattura = (function () {
        function Fattura() {
        }
        Object.defineProperty(Fattura.prototype, "NumDocumento", {
            get: function () {
                return this.NumFattura + "/" + this.Anno;
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            aurelia_framework_1.computedFrom('NumFattura', 'Anno'), 
            __metadata('design:type', String)
        ], Fattura.prototype, "NumDocumento", null);
        return Fattura;
    }());
    exports.Fattura = Fattura;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmF0dHVyYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9mYXR0dXJlL0ZhdHR1cmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJQTtRQUFBO1FBcUJBLENBQUM7UUFURyxzQkFBVyxpQ0FBWTtpQkFBdkI7Z0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDN0MsQ0FBQzs7O1dBQUE7UUFIRDtZQUFDLGdDQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQzs7bURBQUE7UUFVdkMsY0FBQztJQUFELENBQUMsQUFyQkQsSUFxQkM7SUFyQlksZUFBTyxVQXFCbkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7Q2xpZW50ZX0gZnJvbSAnY2xpZW50aS9DbGllbnRlJztcclxuaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRmF0dHVyYSB7XHJcbiAgICBwdWJsaWMgRmF0dHVyYU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgQ2xpZW50ZU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgRGF0YUZhdHR1cmE6IERhdGU7XHJcblxyXG4gICAgcHVibGljIE51bUZhdHR1cmE6IG51bWJlcjtcclxuICAgIHB1YmxpYyBBbm5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2FsZGF0YTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBOb3RlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgRGF0YVNjYWRlbnphOiBEYXRlO1xyXG5cclxuICAgIEBjb21wdXRlZEZyb20oJ051bUZhdHR1cmEnLCAnQW5ubycpXHJcbiAgICBwdWJsaWMgZ2V0IE51bURvY3VtZW50bygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLk51bUZhdHR1cmEgKyBcIi9cIiArIHRoaXMuQW5ubztcclxuICAgIH0gXHJcblxyXG4gICAgLy9zZXQgYmFyKHRoZUJhcjogQm9vbGVhbikge1xyXG4gICAgLy8gICAgdGhpcy5fYmFyID0gdGhlQmFyO1xyXG4gICAgLy99XHJcblxyXG4gICAgcHVibGljIENsaWVudGU6IENsaWVudGU7XHJcbn1cclxuIl19