define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging()
            .plugin('aurelia-dialog', function (settings) {
            settings.lock = true;
        })
            .plugin('aurelia-validatejs');
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUEsbUJBQTBCLE9BQU87UUFDN0IsT0FBTyxDQUFDLEdBQUc7YUFDTixxQkFBcUIsRUFBRTthQUN2QixrQkFBa0IsRUFBRTthQUNwQixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxRQUFRO1lBQzNCLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUMsQ0FBQzthQUNELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRWxDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFWZSxpQkFBUyxZQVV4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XHJcbiAgICBhdXJlbGlhLnVzZVxyXG4gICAgICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgIC5kZXZlbG9wbWVudExvZ2dpbmcoKVxyXG4gICAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtZGlhbG9nJywgKHNldHRpbmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5sb2NrID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtdmFsaWRhdGVqcycpO1xyXG5cclxuICAgIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcclxufSJdfQ==