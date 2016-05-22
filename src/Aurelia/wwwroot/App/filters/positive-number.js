define(["require", "exports"], function (require, exports) {
    "use strict";
    var PositiveNumberValueConverter = (function () {
        function PositiveNumberValueConverter() {
        }
        PositiveNumberValueConverter.prototype.toView = function (value) {
            if (value != undefined && value != "") {
                var numOre = parseInt(value);
                if (numOre != undefined && numOre > 0)
                    return value;
            }
            return '';
        };
        return PositiveNumberValueConverter;
    }());
    exports.PositiveNumberValueConverter = PositiveNumberValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpdmUtbnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2ZpbHRlcnMvcG9zaXRpdmUtbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQUM7UUFBQTtRQVNELENBQUM7UUFSRyw2Q0FBTSxHQUFOLFVBQU8sS0FBYTtZQUNoQixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksU0FBUyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1lBQ0QsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFDTCxtQ0FBQztJQUFELENBQUMsQUFUQSxJQVNBO0lBVGEsb0NBQTRCLCtCQVN6QyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/ZXhwb3J0IGNsYXNzIFBvc2l0aXZlTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xyXG4gICAgdG9WaWV3KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQgJiYgdmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB2YXIgbnVtT3JlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAobnVtT3JlICE9IHVuZGVmaW5lZCAmJiBudW1PcmUgPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn0iXX0=