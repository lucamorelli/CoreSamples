System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var counter, data, TodoService;
    return {
        setters:[],
        execute: function() {
            counter = 0;
            data = [
                { id: ++counter, title: 'Angular2 Router', status: 'done', createdAt: Date.now() },
                { id: ++counter, title: 'Angular2 Component', status: 'done', createdAt: Date.now() },
                { id: ++counter, title: 'Angular2 Core Directives', status: 'done', createdAt: Date.now() },
                { id: ++counter, title: 'Angular2 Custom Directives', status: 'done', createdAt: Date.now() },
                { id: ++counter, title: 'Angular2 Dependence Injection', status: 'done', createdAt: Date.now() },
                { id: ++counter, title: 'Angular2 Form', status: 'done', createdAt: Date.now() },
                { id: ++counter, title: 'Include Development environment', status: 'done', createdAt: Date.now() },
                { id: ++counter, title: 'Include Production environment', status: 'pending', createdAt: Date.now() },
                { id: ++counter, title: 'Unit tests', status: 'done', createdAt: Date.now() }
            ];
            // Our Todo Service that uses Store helper class for managing our state 
            TodoService = (function () {
                function TodoService() {
                    this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
                    this._todos = data;
                }
                TodoService.prototype.addOne = function (todo) {
                    this._todos.push({
                        id: ++counter,
                        title: todo.title,
                        status: 'pending',
                        createdAt: Date.now()
                    });
                };
                TodoService.prototype.removeOne = function (id) {
                    this._todos = this._todos.filter(function (el) { return el.id !== id; });
                };
                TodoService.prototype.find = function () {
                    return this._todos;
                };
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb19zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3NlcnZpY2VzL3RvZG9fc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFPSSxPQUFPLEVBR0wsSUFBSTs7OztZQUhOLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFHVixJQUFJLEdBQVc7Z0JBQ2pCLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2xGLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ3JGLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSwwQkFBMEIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzNGLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQzdGLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSwrQkFBK0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2hHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNoRixFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNsRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNwRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTthQUNoRixDQUFDO1lBRUYsd0VBQXdFO1lBQ3hFO2dCQU1JO29CQUZBLFVBQUssR0FBRyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUc5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCw0QkFBTSxHQUFOLFVBQU8sSUFBVTtvQkFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDYixFQUFFLEVBQUUsRUFBRSxPQUFPO3dCQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSzt3QkFDakIsTUFBTSxFQUFFLFNBQVM7d0JBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO3FCQUN4QixDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFFRCwrQkFBUyxHQUFULFVBQVUsRUFBVTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFaLENBQVksQ0FBQyxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELDBCQUFJLEdBQUo7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0wsa0JBQUM7WUFBRCxDQUFDLEFBMUJELElBMEJDO1lBMUJELHFDQTBCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBUb2RvIHsgXHJcbiAgICBpZD86IG51bWJlcjtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgICBjcmVhdGVkQXQ/OiBudW1iZXI7XHJcbn0gXHJcblxyXG5sZXQgY291bnRlciA9IDA7XHJcblxyXG5cclxuY29uc3QgZGF0YTogVG9kb1tdID0gW1xyXG4gICAgeyBpZDogKytjb3VudGVyLCB0aXRsZTogJ0FuZ3VsYXIyIFJvdXRlcicsIHN0YXR1czogJ2RvbmUnLCBjcmVhdGVkQXQ6IERhdGUubm93KCkgfSxcclxuICAgIHsgaWQ6ICsrY291bnRlciwgdGl0bGU6ICdBbmd1bGFyMiBDb21wb25lbnQnLCBzdGF0dXM6ICdkb25lJywgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH0sXHJcbiAgICB7IGlkOiArK2NvdW50ZXIsIHRpdGxlOiAnQW5ndWxhcjIgQ29yZSBEaXJlY3RpdmVzJywgc3RhdHVzOiAnZG9uZScsIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSB9LFxyXG4gICAgeyBpZDogKytjb3VudGVyLCB0aXRsZTogJ0FuZ3VsYXIyIEN1c3RvbSBEaXJlY3RpdmVzJywgc3RhdHVzOiAnZG9uZScsIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSB9LFxyXG4gICAgeyBpZDogKytjb3VudGVyLCB0aXRsZTogJ0FuZ3VsYXIyIERlcGVuZGVuY2UgSW5qZWN0aW9uJywgc3RhdHVzOiAnZG9uZScsIGNyZWF0ZWRBdDogRGF0ZS5ub3coKSB9LFxyXG4gICAgeyBpZDogKytjb3VudGVyLCB0aXRsZTogJ0FuZ3VsYXIyIEZvcm0nLCBzdGF0dXM6ICdkb25lJywgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH0sXHJcbiAgICB7IGlkOiArK2NvdW50ZXIsIHRpdGxlOiAnSW5jbHVkZSBEZXZlbG9wbWVudCBlbnZpcm9ubWVudCcsIHN0YXR1czogJ2RvbmUnLCBjcmVhdGVkQXQ6IERhdGUubm93KCkgfSxcclxuICAgIHsgaWQ6ICsrY291bnRlciwgdGl0bGU6ICdJbmNsdWRlIFByb2R1Y3Rpb24gZW52aXJvbm1lbnQnLCBzdGF0dXM6ICdwZW5kaW5nJywgY3JlYXRlZEF0OiBEYXRlLm5vdygpIH0sXHJcbiAgICB7IGlkOiArK2NvdW50ZXIsIHRpdGxlOiAnVW5pdCB0ZXN0cycsIHN0YXR1czogJ2RvbmUnLCBjcmVhdGVkQXQ6IERhdGUubm93KCkgfSBcclxuXTtcclxuXHJcbi8vIE91ciBUb2RvIFNlcnZpY2UgdGhhdCB1c2VzIFN0b3JlIGhlbHBlciBjbGFzcyBmb3IgbWFuYWdpbmcgb3VyIHN0YXRlIFxyXG5leHBvcnQgY2xhc3MgVG9kb1NlcnZpY2UgeyBcclxuXHJcbiAgICBfdG9kb3M6IFRvZG9bXTtcclxuXHJcbiAgICBuYW1lcyA9IFsnRGlqa3N0cmEnLCAnS251dGgnLCAnVHVyaW5nJywgJ0hvcHBlciddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyBcclxuICAgICAgICB0aGlzLl90b2RvcyA9IGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkT25lKHRvZG86IFRvZG8pIHsgXHJcbiAgICAgICAgdGhpcy5fdG9kb3MucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiArK2NvdW50ZXIsXHJcbiAgICAgICAgICAgIHRpdGxlOiB0b2RvLnRpdGxlLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcclxuICAgICAgICAgICAgY3JlYXRlZEF0OiBEYXRlLm5vdygpIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxuXHJcbiAgICByZW1vdmVPbmUoaWQ6IG51bWJlcikgeyBcclxuICAgICAgICB0aGlzLl90b2RvcyA9IHRoaXMuX3RvZG9zLmZpbHRlcihlbCA9PiBlbC5pZCAhPT0gaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoKTogVG9kb1tdIHsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xyXG4gICAgfVxyXG59IFxyXG4iXX0=