define(["require", "exports"], function (require, exports) {
    "use strict";
    var ShortDateValueConverter = (function () {
        function ShortDateValueConverter() {
        }
        ShortDateValueConverter.prototype.toView = function (value) {
            var data = new Date(value);
            return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
        };
        return ShortDateValueConverter;
    }());
    exports.ShortDateValueConverter = ShortDateValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcnQtZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9maWx0ZXJzL3Nob3J0LWRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFBQTtRQUFBO1FBS0EsQ0FBQztRQUpHLHdDQUFNLEdBQU4sVUFBTyxLQUFhO1lBQ2hCLElBQUksSUFBSSxHQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkYsQ0FBQztRQUNMLDhCQUFDO0lBQUQsQ0FBQyxBQUxELElBS0M7SUFMWSwrQkFBdUIsMEJBS25DLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2hvcnREYXRlVmFsdWVDb252ZXJ0ZXIge1xyXG4gICAgdG9WaWV3KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHZhciBkYXRhOiBEYXRlID0gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBkYXRhLmdldERhdGUoKSArIFwiL1wiICsgKGRhdGEuZ2V0TW9udGgoKSArIDEpICsgXCIvXCIgKyBkYXRhLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9XHJcbn0iXX0=