define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-dialog', function (settings) {
            settings.lock = true;
        });
        //.plugin('aurelia-validatejs');
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUMsbUJBQTBCLE9BQU87UUFDOUIsT0FBTyxDQUFDLEdBQUc7YUFDTixxQkFBcUIsRUFBRTthQUN2QixrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsZ0NBQWdDO1FBRXBDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFWZ0IsaUJBQVMsWUFVekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2V4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xyXG4gICAgYXVyZWxpYS51c2VcclxuICAgICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcclxuICAgICAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKClcclxuICAgICAgICAucGx1Z2luKCdhdXJlbGlhLWRpYWxvZycsIChzZXR0aW5ncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MubG9jayA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLy5wbHVnaW4oJ2F1cmVsaWEtdmFsaWRhdGVqcycpO1xyXG5cclxuICAgIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufSJdfQ==