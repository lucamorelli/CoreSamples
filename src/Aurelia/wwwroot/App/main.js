define(["require", "exports", './authConfig'], function (require, exports, authConfig_1) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-dialog', function (settings) {
            settings.lock = true;
        })
            .plugin('aurelia-validatejs');
        //Uncomment the line below to enable animation.
        aurelia.use.plugin('aurelia-animator-css');
        aurelia.use.plugin('aurelia-api', function (config) {
            config.registerEndpoint('connect', 'connect', { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        });
        aurelia.use.plugin('aurelia-authentication', function (baseConfig) {
            baseConfig.configure(authConfig_1.default);
        });
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBRUEsbUJBQTBCLE9BQU87UUFDN0IsT0FBTyxDQUFDLEdBQUc7YUFDTixxQkFBcUIsRUFBRTthQUN2QixrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRWxDLCtDQUErQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFBLE1BQU07WUFDcEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEgsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxVQUFBLFVBQVU7WUFDbkQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxvQkFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUE7UUFFRixPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBckJlLGlCQUFTLFlBcUJ4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGhDb25maWcgZnJvbSAnLi9hdXRoQ29uZmlnJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xyXG4gICAgYXVyZWxpYS51c2VcclxuICAgICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgICAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKClcclxuICAgICAgICAucGx1Z2luKCdhdXJlbGlhLWRpYWxvZycsIChzZXR0aW5ncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MubG9jayA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAucGx1Z2luKCdhdXJlbGlhLXZhbGlkYXRlanMnKTtcclxuXHJcbiAgICAvL1VuY29tbWVudCB0aGUgbGluZSBiZWxvdyB0byBlbmFibGUgYW5pbWF0aW9uLlxyXG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpO1xyXG5cclxuICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS1hcGknLCBjb25maWcgPT4ge1xyXG4gICAgICAgIGNvbmZpZy5yZWdpc3RlckVuZHBvaW50KCdjb25uZWN0JywgJ2Nvbm5lY3QnLCB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0gfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhdXJlbGlhLnVzZS5wbHVnaW4oJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nLCBiYXNlQ29uZmlnID0+IHtcclxuICAgICAgICBiYXNlQ29uZmlnLmNvbmZpZ3VyZShhdXRoQ29uZmlnKTtcclxuICAgIH0pXHJcblxyXG4gICAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCkpO1xyXG59Il19