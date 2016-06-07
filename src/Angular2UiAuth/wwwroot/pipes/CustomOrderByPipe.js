System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CustomOrderByPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CustomOrderByPipe = (function () {
                function CustomOrderByPipe() {
                }
                CustomOrderByPipe.prototype.dynamicSort = function (prop) {
                    var sortOrder = 1;
                    if (prop[0] === '-') {
                        sortOrder = -1;
                        prop = prop.slice(1);
                    }
                    return function (a, b) {
                        var result = a[prop] < b[prop] ? -1 : (a[prop] > b[prop] ? 1 : 0);
                        return result * sortOrder;
                    };
                };
                CustomOrderByPipe.prototype.dynamicSortMultiple = function () {
                    var _this = this;
                    var props = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        props[_i - 0] = arguments[_i];
                    }
                    return function (obj1, obj2) {
                        var i = 0;
                        var result = 0;
                        /* try getting a different result from 0 (equal)
                        * as long as we have extra properties to compare
                        */
                        while (result === 0 && i < props.length) {
                            result = _this.dynamicSort(props[i])(obj1, obj2);
                            i++;
                        }
                        return result;
                    };
                };
                CustomOrderByPipe.prototype.transform = function (value, args) {
                    var params = Array.isArray(args[0]) ? args[0] : args;
                    value.sort(this.dynamicSortMultiple.apply(this, params));
                    return value;
                };
                CustomOrderByPipe = __decorate([
                    core_1.Pipe({
                        name: 'customOrderBy'
                    }), 
                    __metadata('design:paramtypes', [])
                ], CustomOrderByPipe);
                return CustomOrderByPipe;
            }());
            exports_1("CustomOrderByPipe", CustomOrderByPipe);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tT3JkZXJCeVBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvcGlwZXMvQ3VzdG9tT3JkZXJCeVBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQTtnQkEyQ0EsQ0FBQztnQkF6Q0csdUNBQVcsR0FBWCxVQUFZLElBQVk7b0JBRXBCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztvQkFFbEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDZixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekIsQ0FBQztvQkFFRCxNQUFNLENBQUMsVUFBQyxDQUFTLEVBQUUsQ0FBUzt3QkFDcEIsSUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNwRSxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztvQkFDOUIsQ0FBQyxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsK0NBQW1CLEdBQW5CO29CQUFBLGlCQWdCQztvQkFoQm1CLGVBQWtCO3lCQUFsQixXQUFrQixDQUFsQixzQkFBa0IsQ0FBbEIsSUFBa0I7d0JBQWxCLDhCQUFrQjs7b0JBRWxDLE1BQU0sQ0FBQyxVQUFDLElBQVksRUFBRSxJQUFZO3dCQUU5QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ1YsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNmOzswQkFFRTt3QkFDRixPQUFPLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDdEMsTUFBTSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOzRCQUNoRCxDQUFDLEVBQUUsQ0FBQzt3QkFDUixDQUFDO3dCQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ2xCLENBQUMsQ0FBQztnQkFDTixDQUFDO2dCQUVELHFDQUFTLEdBQVQsVUFBVSxLQUFlLEVBQUUsSUFBYztvQkFDckMsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO29CQUV2RCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBRXpELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBNUNMO29CQUFDLFdBQUksQ0FBQzt3QkFDRixJQUFJLEVBQUUsZUFBZTtxQkFDeEIsQ0FBQzs7cUNBQUE7Z0JBNENGLHdCQUFDO1lBQUQsQ0FBQyxBQTNDRCxJQTJDQztZQTNDRCxpREEyQ0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7UGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ2N1c3RvbU9yZGVyQnknIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tT3JkZXJCeVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBkeW5hbWljU29ydChwcm9wOiBzdHJpbmcpOiBGdW5jdGlvbiB7IFxyXG4gXHJcbiAgICAgICAgbGV0IHNvcnRPcmRlciA9IDE7ICBcclxuIFxyXG4gICAgICAgIGlmIChwcm9wWzBdID09PSAnLScpIHtcclxuICAgICAgICAgICAgc29ydE9yZGVyID0gLTE7XHJcbiAgICAgICAgICAgIHByb3AgPSBwcm9wLnNsaWNlKDEpO1xyXG4gICAgICAgIH0gXHJcbiBcclxuICAgICAgICByZXR1cm4gKGE6IE9iamVjdCwgYjogT2JqZWN0KSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYVtwcm9wXSA8IGJbcHJvcF0gPyAtMSA6IChhW3Byb3BdID4gYltwcm9wXSA/IDEgOiAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQgKiBzb3J0T3JkZXI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICB9IFxyXG5cclxuICAgIGR5bmFtaWNTb3J0TXVsdGlwbGUoLi4ucHJvcHM6IHN0cmluZ1tdKTogRnVuY3Rpb24geyBcclxuXHJcbiAgICAgICAgcmV0dXJuIChvYmoxOiBPYmplY3QsIG9iajI6IE9iamVjdCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gMDtcclxuICAgICAgICAgICAgLyogdHJ5IGdldHRpbmcgYSBkaWZmZXJlbnQgcmVzdWx0IGZyb20gMCAoZXF1YWwpIFxyXG4gICAgICAgICAgICAqIGFzIGxvbmcgYXMgd2UgaGF2ZSBleHRyYSBwcm9wZXJ0aWVzIHRvIGNvbXBhcmUgXHJcbiAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIHdoaWxlIChyZXN1bHQgPT09IDAgJiYgaSA8IHByb3BzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5keW5hbWljU29ydChwcm9wc1tpXSkob2JqMSwgb2JqMik7XHJcbiAgICAgICAgICAgICAgICBpKys7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IE9iamVjdFtdLCBhcmdzOiBzdHJpbmdbXSkgeyBcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSBBcnJheS5pc0FycmF5KGFyZ3NbMF0pID8gYXJnc1swXSA6IGFyZ3M7XHJcblxyXG4gICAgICAgIHZhbHVlLnNvcnQodGhpcy5keW5hbWljU29ydE11bHRpcGxlLmFwcGx5KHRoaXMsIHBhcmFtcykpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG59IFxyXG4iXX0=