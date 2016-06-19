define(["require", "exports"], function (require, exports) {
    "use strict";
    // Method decorators
    // http://blog.wolksoftware.com/decorators-reflection-javascript-typescript
    //export function logMethod(target: Function, key: string, descriptor: any) {
    function logMethod(target, key, descriptor) {
        // save a reference to the original method
        // this way we keep the values currently in the 
        // descriptor and don't overwrite what another 
        // decorator might have done to the descriptor.
        var originalMethod = descriptor.value;
        //editing the descriptor/value parameter
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var a = args.map(function (a) { return JSON.stringify(a); }).join();
            // note usage of originalMethod here
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: " + key + "(" + a + ") => " + r);
            return result;
        };
        // return edited descriptor as opposed to overwriting 
        // the descriptor by returning a new descriptor
        return descriptor;
    }
    exports.logMethod = logMethod;
    // http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
    function logMethodDecortatedParams(target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            var metadataKey = "__log_" + key + "_parameters";
            var indices = target[metadataKey];
            if (Array.isArray(indices)) {
                for (var i = 0; i < args.length; i++) {
                    if (indices.indexOf(i) !== -1) {
                        var arg = args[i];
                        var argStr = JSON.stringify(arg) || arg.toString();
                        console.log(key + " arg[" + i + "]: " + argStr);
                    }
                }
                var result = originalMethod.apply(this, args);
                return result;
            }
            else {
                var a = args.map(function (a) { return (JSON.stringify(a) || a.toString()); }).join();
                var result = originalMethod.apply(this, args);
                var r = JSON.stringify(result);
                console.log("Call: " + key + "(" + a + ") => " + r);
                return result;
            }
        };
        return descriptor;
    }
    exports.logMethodDecortatedParams = logMethodDecortatedParams;
    // Property decorators
    // http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-ii
    function logProperty(target, key) {
        // property value
        var _val = this[key];
        // property getter
        var getter = function () {
            console.log("Get: " + key + " => " + _val);
            return _val;
        };
        // property setter
        var setter = function (newVal) {
            console.log("Set: " + key + " => " + newVal);
            _val = newVal;
        };
        // Delete property.
        if (delete this[key]) {
            // Create new property with getter and setter
            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
    exports.logProperty = logProperty;
    // class decorators
    // http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-ii
    function logClass(target) {
        // save a reference to the original constructor
        var original = target;
        // a utility function to generate instances of a class
        function construct(constructor, args) {
            var c = function () {
                return constructor.apply(this, args);
            };
            c.prototype = constructor.prototype;
            return new c();
        }
        // the new constructor behaviour
        var f = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            console.log("New: " + original.name);
            return construct(original, args);
        };
        // copy prototype so intanceof operator still works
        f.prototype = original.prototype;
        // return new constructor (will override original)
        return f;
    }
    exports.logClass = logClass;
    // parameter decorators
    // http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
    function logParameter(target, key, index) {
        var metadataKey = "log_" + key + "_parameters";
        if (Array.isArray(target[metadataKey])) {
            target[metadataKey].push(index);
        }
        else {
            target[metadataKey] = [index];
        }
    }
    exports.logParameter = logParameter;
    // decorators factory
    // http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
    function logFactory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        switch (args.length) {
            case 1:
                return logClass.apply(this, args);
            case 2:
                return logProperty.apply(this, args);
            case 3:
                if (typeof args[2] === "number") {
                    return logParameter.apply(this, args);
                }
                return logMethod.apply(this, args);
            default:
                throw new Error("Decorators are not valid here!");
        }
    }
    exports.logFactory = logFactory;
    // configurable decorators
    // http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
    function logClassWithArgs(filter) {
        return function (target) {
            // implement class decorator here, the class decorator 
            // will have access to the decorator arguments (filter) 
            // because they are  stored in a closure 
        };
    }
    exports.logClassWithArgs = logClassWithArgs;
});
// http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-4 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9IZWxwZXJzL0RlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7SUFBQSxvQkFBb0I7SUFDcEIsMkVBQTJFO0lBQzNFLDZFQUE2RTtJQUM3RSxtQkFBMEIsTUFBVyxFQUFFLEdBQVcsRUFBRSxVQUFlO1FBRS9ELDBDQUEwQztRQUMxQyxnREFBZ0Q7UUFDaEQsK0NBQStDO1FBQy9DLCtDQUErQztRQUMvQyxJQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1FBRXRDLHdDQUF3QztRQUN4QyxVQUFVLENBQUMsS0FBSyxHQUFHO1lBQVUsY0FBYztpQkFBZCxXQUFjLENBQWQsc0JBQWMsQ0FBZCxJQUFjO2dCQUFkLDZCQUFjOztZQUN2QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hELG9DQUFvQztZQUNwQyxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBUyxHQUFHLFNBQUksQ0FBQyxhQUFRLENBQUcsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBRUQsc0RBQXNEO1FBQ3RELCtDQUErQztRQUMvQyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFyQmUsaUJBQVMsWUFxQnhCLENBQUE7SUFFRCx5R0FBeUc7SUFDekcsbUNBQTBDLE1BQWdCLEVBQUUsR0FBVyxFQUFFLFVBQWU7UUFD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QUMzQyxNQUFNLENBQUMsVUFBQyxNQUFjO1lBQ2xCLHVEQUF1RDtZQUN2RCx3REFBd0Q7WUFDeEQseUNBQXlDO1FBQzdDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFOZSx3QkFBZ0IsbUJBTS9CLENBQUE7O0FBRUQseUdBQXlHIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWV0aG9kIGRlY29yYXRvcnNcclxuLy8gaHR0cDovL2Jsb2cud29sa3NvZnR3YXJlLmNvbS9kZWNvcmF0b3JzLXJlZmxlY3Rpb24tamF2YXNjcmlwdC10eXBlc2NyaXB0XHJcbi8vZXhwb3J0IGZ1bmN0aW9uIGxvZ01ldGhvZCh0YXJnZXQ6IEZ1bmN0aW9uLCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogYW55KSB7XHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dNZXRob2QodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBhbnkpIHtcclxuXHJcbiAgICAvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBvcmlnaW5hbCBtZXRob2RcclxuICAgIC8vIHRoaXMgd2F5IHdlIGtlZXAgdGhlIHZhbHVlcyBjdXJyZW50bHkgaW4gdGhlIFxyXG4gICAgLy8gZGVzY3JpcHRvciBhbmQgZG9uJ3Qgb3ZlcndyaXRlIHdoYXQgYW5vdGhlciBcclxuICAgIC8vIGRlY29yYXRvciBtaWdodCBoYXZlIGRvbmUgdG8gdGhlIGRlc2NyaXB0b3IuXHJcbiAgICB2YXIgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlOyBcclxuXHJcbiAgICAvL2VkaXRpbmcgdGhlIGRlc2NyaXB0b3IvdmFsdWUgcGFyYW1ldGVyXHJcbiAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgdmFyIGEgPSBhcmdzLm1hcChhID0+IEpTT04uc3RyaW5naWZ5KGEpKS5qb2luKCk7XHJcbiAgICAgICAgLy8gbm90ZSB1c2FnZSBvZiBvcmlnaW5hbE1ldGhvZCBoZXJlXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgIHZhciByID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhgQ2FsbDogJHtrZXl9KCR7YX0pID0+ICR7cn1gKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBlZGl0ZWQgZGVzY3JpcHRvciBhcyBvcHBvc2VkIHRvIG92ZXJ3cml0aW5nIFxyXG4gICAgLy8gdGhlIGRlc2NyaXB0b3IgYnkgcmV0dXJuaW5nIGEgbmV3IGRlc2NyaXB0b3JcclxuICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG59XHJcblxyXG4vLyBodHRwOi8vYmxvZy53b2xrc29mdHdhcmUuY29tL2RlY29yYXRvcnMtbWV0YWRhdGEtcmVmbGVjdGlvbi1pbi10eXBlc2NyaXB0LWZyb20tbm92aWNlLXRvLWV4cGVydC1wYXJ0LTNcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ01ldGhvZERlY29ydGF0ZWRQYXJhbXModGFyZ2V0OiBGdW5jdGlvbiwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSkge1xyXG4gICAgdmFyIG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pIHtcclxuXHJcbiAgICAgICAgdmFyIG1ldGFkYXRhS2V5ID0gYF9fbG9nXyR7a2V5fV9wYXJhbWV0ZXJzYDtcclxuICAgICAgICB2YXIgaW5kaWNlcyA9IHRhcmdldFttZXRhZGF0YUtleV07XHJcblxyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGluZGljZXMpKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kaWNlcy5pbmRleE9mKGkpICE9PSAtMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnID0gYXJnc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXJnU3RyID0gSlNPTi5zdHJpbmdpZnkoYXJnKSB8fCBhcmcudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9IGFyZ1ske2l9XTogJHthcmdTdHJ9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG9yaWdpbmFsTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhID0gYXJncy5tYXAoYSA9PiAoSlNPTi5zdHJpbmdpZnkoYSkgfHwgYS50b1N0cmluZygpKSkuam9pbigpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gb3JpZ2luYWxNZXRob2QuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgICAgIHZhciByID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYENhbGw6ICR7a2V5fSgke2F9KSA9PiAke3J9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlc2NyaXB0b3I7XHJcbn1cclxuXHJcbi8vIFByb3BlcnR5IGRlY29yYXRvcnNcclxuLy8gaHR0cDovL2Jsb2cud29sa3NvZnR3YXJlLmNvbS9kZWNvcmF0b3JzLW1ldGFkYXRhLXJlZmxlY3Rpb24taW4tdHlwZXNjcmlwdC1mcm9tLW5vdmljZS10by1leHBlcnQtcGFydC1paVxyXG5leHBvcnQgZnVuY3Rpb24gbG9nUHJvcGVydHkodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nKSB7XHJcblxyXG4gICAgLy8gcHJvcGVydHkgdmFsdWVcclxuICAgIHZhciBfdmFsID0gdGhpc1trZXldO1xyXG5cclxuICAgIC8vIHByb3BlcnR5IGdldHRlclxyXG4gICAgdmFyIGdldHRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgR2V0OiAke2tleX0gPT4gJHtfdmFsfWApO1xyXG4gICAgICAgIHJldHVybiBfdmFsO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBwcm9wZXJ0eSBzZXR0ZXJcclxuICAgIHZhciBzZXR0ZXIgPSBmdW5jdGlvbiAobmV3VmFsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYFNldDogJHtrZXl9ID0+ICR7bmV3VmFsfWApO1xyXG4gICAgICAgIF92YWwgPSBuZXdWYWw7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERlbGV0ZSBwcm9wZXJ0eS5cclxuICAgIGlmIChkZWxldGUgdGhpc1trZXldKSB7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBuZXcgcHJvcGVydHkgd2l0aCBnZXR0ZXIgYW5kIHNldHRlclxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwge1xyXG4gICAgICAgICAgICBnZXQ6IGdldHRlcixcclxuICAgICAgICAgICAgc2V0OiBzZXR0ZXIsXHJcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBjbGFzcyBkZWNvcmF0b3JzXHJcbi8vIGh0dHA6Ly9ibG9nLndvbGtzb2Z0d2FyZS5jb20vZGVjb3JhdG9ycy1tZXRhZGF0YS1yZWZsZWN0aW9uLWluLXR5cGVzY3JpcHQtZnJvbS1ub3ZpY2UtdG8tZXhwZXJ0LXBhcnQtaWlcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ0NsYXNzKHRhcmdldDogYW55KSB7XHJcblxyXG4gICAgLy8gc2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgY29uc3RydWN0b3JcclxuICAgIHZhciBvcmlnaW5hbCA9IHRhcmdldDtcclxuXHJcbiAgICAvLyBhIHV0aWxpdHkgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgaW5zdGFuY2VzIG9mIGEgY2xhc3NcclxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdChjb25zdHJ1Y3RvciwgYXJncykge1xyXG4gICAgICAgIHZhciBjOiBhbnkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYy5wcm90b3R5cGUgPSBjb25zdHJ1Y3Rvci5wcm90b3R5cGU7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIG5ldyBjb25zdHJ1Y3RvciBiZWhhdmlvdXJcclxuICAgIHZhciBmOiBhbnkgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmV3OiBcIiArIG9yaWdpbmFsLm5hbWUpO1xyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3Qob3JpZ2luYWwsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGNvcHkgcHJvdG90eXBlIHNvIGludGFuY2VvZiBvcGVyYXRvciBzdGlsbCB3b3Jrc1xyXG4gICAgZi5wcm90b3R5cGUgPSBvcmlnaW5hbC5wcm90b3R5cGU7XHJcblxyXG4gICAgLy8gcmV0dXJuIG5ldyBjb25zdHJ1Y3RvciAod2lsbCBvdmVycmlkZSBvcmlnaW5hbClcclxuICAgIHJldHVybiBmO1xyXG59XHJcblxyXG4vLyBwYXJhbWV0ZXIgZGVjb3JhdG9yc1xyXG4vLyBodHRwOi8vYmxvZy53b2xrc29mdHdhcmUuY29tL2RlY29yYXRvcnMtbWV0YWRhdGEtcmVmbGVjdGlvbi1pbi10eXBlc2NyaXB0LWZyb20tbm92aWNlLXRvLWV4cGVydC1wYXJ0LTNcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1BhcmFtZXRlcih0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgIHZhciBtZXRhZGF0YUtleSA9IGBsb2dfJHtrZXl9X3BhcmFtZXRlcnNgO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0W21ldGFkYXRhS2V5XSkpIHtcclxuICAgICAgICB0YXJnZXRbbWV0YWRhdGFLZXldLnB1c2goaW5kZXgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0W21ldGFkYXRhS2V5XSA9IFtpbmRleF07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGRlY29yYXRvcnMgZmFjdG9yeVxyXG4vLyBodHRwOi8vYmxvZy53b2xrc29mdHdhcmUuY29tL2RlY29yYXRvcnMtbWV0YWRhdGEtcmVmbGVjdGlvbi1pbi10eXBlc2NyaXB0LWZyb20tbm92aWNlLXRvLWV4cGVydC1wYXJ0LTNcclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ0ZhY3RvcnkoLi4uYXJnczogYW55W10pIHtcclxuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIHJldHVybiBsb2dDbGFzcy5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIHJldHVybiBsb2dQcm9wZXJ0eS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1syXSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxvZ1BhcmFtZXRlci5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbG9nTWV0aG9kLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRlY29yYXRvcnMgYXJlIG5vdCB2YWxpZCBoZXJlIVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gY29uZmlndXJhYmxlIGRlY29yYXRvcnNcclxuLy8gaHR0cDovL2Jsb2cud29sa3NvZnR3YXJlLmNvbS9kZWNvcmF0b3JzLW1ldGFkYXRhLXJlZmxlY3Rpb24taW4tdHlwZXNjcmlwdC1mcm9tLW5vdmljZS10by1leHBlcnQtcGFydC0zXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dDbGFzc1dpdGhBcmdzKGZpbHRlcjogT2JqZWN0KSB7XHJcbiAgICByZXR1cm4gKHRhcmdldDogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgLy8gaW1wbGVtZW50IGNsYXNzIGRlY29yYXRvciBoZXJlLCB0aGUgY2xhc3MgZGVjb3JhdG9yIFxyXG4gICAgICAgIC8vIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gdGhlIGRlY29yYXRvciBhcmd1bWVudHMgKGZpbHRlcikgXHJcbiAgICAgICAgLy8gYmVjYXVzZSB0aGV5IGFyZSAgc3RvcmVkIGluIGEgY2xvc3VyZSBcclxuICAgIH1cclxufVxyXG5cclxuLy8gaHR0cDovL2Jsb2cud29sa3NvZnR3YXJlLmNvbS9kZWNvcmF0b3JzLW1ldGFkYXRhLXJlZmxlY3Rpb24taW4tdHlwZXNjcmlwdC1mcm9tLW5vdmljZS10by1leHBlcnQtcGFydC00Il19