define(["require", "exports"], function (require, exports) {
    "use strict";
    var Welcome = (function () {
        function Welcome() {
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
        }
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.welcome = function () {
            alert("Welcome, " + this.fullName + "!");
        };
        return Welcome;
    }());
    exports.Welcome = Welcome;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUM7UUFBQTtZQUNHLFlBQU8sR0FBRyx3Q0FBd0MsQ0FBQztZQUNuRCxjQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFTckIsQ0FBQztRQVBHLHNCQUFJLDZCQUFRO2lCQUFaO2dCQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxRQUFVLENBQUM7WUFDaEQsQ0FBQzs7O1dBQUE7UUFFRCx5QkFBTyxHQUFQO1lBQ0ksS0FBSyxDQUFDLGNBQVksSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBWkEsSUFZQTtJQVphLGVBQU8sVUFZcEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2V4cG9ydCBjbGFzcyBXZWxjb21lIHtcclxuICAgIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xyXG4gICAgZmlyc3ROYW1lID0gJ0pvaG4nO1xyXG4gICAgbGFzdE5hbWUgPSAnRG9lJzsgICBcclxuICAgICAgICBcclxuICAgIGdldCBmdWxsTmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHdlbGNvbWUoKSB7IFxyXG4gICAgICAgIGFsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xyXG4gICAgfSBcclxufSJdfQ==