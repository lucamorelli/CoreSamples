define(["require", "exports", 'aurelia-dialog'], function (require, exports, aurelia_dialog_1) {
    "use strict";
    var confirmOperation = (function () {
        function confirmOperation(controller) {
            this.controller = controller;
        }
        confirmOperation.prototype.activate = function (message) {
            this.message = message;
        };
        confirmOperation.inject = [aurelia_dialog_1.DialogController];
        return confirmOperation;
    }());
    exports.confirmOperation = confirmOperation;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlybU9wZXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9kaWFsb2dzL2NvbmZpcm1PcGVyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFFQTtRQU1JLDBCQUFZLFVBQVU7WUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDakMsQ0FBQztRQUVELG1DQUFRLEdBQVIsVUFBUyxPQUFPO1lBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQVhNLHVCQUFNLEdBQUcsQ0FBQyxpQ0FBZ0IsQ0FBQyxDQUFDO1FBWXZDLHVCQUFDO0lBQUQsQ0FBQyxBQWJELElBYUM7SUFiWSx3QkFBZ0IsbUJBYTVCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0RpYWxvZ0NvbnRyb2xsZXJ9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBjb25maXJtT3BlcmF0aW9uIHtcclxuICAgIHN0YXRpYyBpbmplY3QgPSBbRGlhbG9nQ29udHJvbGxlcl07XHJcbiAgICBwcml2YXRlIGNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBhY3RpdmF0ZShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgIH1cclxufVxyXG4iXX0=