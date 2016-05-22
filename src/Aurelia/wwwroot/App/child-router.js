define(["require", "exports"], function (require, exports) {
    "use strict";
    var ChildRouter = (function () {
        function ChildRouter() {
            this.heading = 'Child Router';
        }
        ChildRouter.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: './welcome', nav: true, title: 'Welcome' },
                { route: 'flickr', name: 'flickr', moduleId: './flickr', nav: true },
                { route: 'child-router', name: 'childRouter', moduleId: './child-router', nav: true, title: 'Child Router' }
            ]);
            this.router = router;
        };
        return ChildRouter;
    }());
    exports.ChildRouter = ChildRouter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpbGQtcm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2NoaWxkLXJvdXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFDO1FBQUE7WUFDRyxZQUFPLEdBQUcsY0FBYyxDQUFDO1FBWTdCLENBQUM7UUFURyxxQ0FBZSxHQUFmLFVBQWdCLE1BQU0sRUFBRSxNQUFNO1lBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtnQkFDL0YsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO2dCQUNwRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO2FBQy9HLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFDTCxrQkFBQztJQUFELENBQUMsQUFiQSxJQWFBO0lBYmEsbUJBQVcsY0FheEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2V4cG9ydCBjbGFzcyBDaGlsZFJvdXRlciB7XHJcbiAgICBoZWFkaW5nID0gJ0NoaWxkIFJvdXRlcic7XHJcbiAgICByb3V0ZXI6IGFueTtcclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyByb3V0ZTogWycnLCAnd2VsY29tZSddLCBuYW1lOiAnd2VsY29tZScsIG1vZHVsZUlkOiAnLi93ZWxjb21lJywgbmF2OiB0cnVlLCB0aXRsZTogJ1dlbGNvbWUnIH0sXHJcbiAgICAgICAgICAgIHsgcm91dGU6ICdmbGlja3InLCBuYW1lOiAnZmxpY2tyJywgbW9kdWxlSWQ6ICcuL2ZsaWNrcicsIG5hdjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgbmFtZTogJ2NoaWxkUm91dGVyJywgbW9kdWxlSWQ6ICcuL2NoaWxkLXJvdXRlcicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdDaGlsZCBSb3V0ZXInIH1cclxuICAgICAgICBdKTsgXHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG59Il19