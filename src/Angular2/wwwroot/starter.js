System.register(['@angular/platform-browser-dynamic', '@angular/router-deprecated', './app/app', '@angular/http', 'rxjs/add/operator/map', 'rxjs/add/observable/from'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, router_deprecated_1, app_1, http_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.AppCmp, [
                router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS
            ]).catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL0FwcC9zdGFydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVNBLG9DQUFTLENBQUMsWUFBTSxFQUFFO2dCQUNkLG9DQUFnQixFQUFFLHFCQUFjO2FBQ25DLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2Jvb3RzdHJhcH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHtST1VURVJfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7QXBwQ21wfSBmcm9tICcuL2FwcC9hcHAnO1xyXG5pbXBvcnQge0hUVFBfUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xyXG5cclxuXHJcbmJvb3RzdHJhcChBcHBDbXAsIFsgIFxyXG4gICAgUk9VVEVSX1BST1ZJREVSUywgSFRUUF9QUk9WSURFUlMgIFxyXG5dKS5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTsiXX0=