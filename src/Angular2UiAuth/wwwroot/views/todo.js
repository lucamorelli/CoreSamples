System.register(['@angular/core', '@angular/common', '../services/todo_service', '../directives/Autofocus', '../pipes/CustomOrderByPipe'], function(exports_1, context_1) {
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
    var core_1, common_1, todo_service_1, Autofocus_1, CustomOrderByPipe_1;
    var TodoCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (Autofocus_1_1) {
                Autofocus_1 = Autofocus_1_1;
            },
            function (CustomOrderByPipe_1_1) {
                CustomOrderByPipe_1 = CustomOrderByPipe_1_1;
            }],
        execute: function() {
            TodoCmp = (function () {
                function TodoCmp(todoService) {
                    this.todoService = todoService;
                    this.todoForm = new common_1.ControlGroup({
                        title: new common_1.Control('', common_1.Validators.required)
                    });
                }
                TodoCmp.prototype.addOne = function (todo) {
                    this.todoService.addOne(todo);
                    this.todoForm.controls['title'].updateValue('');
                };
                TodoCmp.prototype.removeOne = function (todo) {
                    this.todoService.removeOne(todo.id);
                };
                TodoCmp.prototype.find = function () {
                    return this.todoService.find();
                };
                TodoCmp = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        templateUrl: './views/todo.html',
                        providers: [common_1.FORM_PROVIDERS],
                        directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, Autofocus_1.Autofocus],
                        pipes: [CustomOrderByPipe_1.CustomOrderByPipe]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoCmp);
                return TodoCmp;
            }());
            exports_1("TodoCmp", TodoCmp);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC92aWV3cy90b2RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBZ0JBO2dCQUlJLGlCQUFvQixXQUF3QjtvQkFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7b0JBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxxQkFBWSxDQUFDO3dCQUM3QixLQUFLLEVBQUUsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQztxQkFDOUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBRUQsd0JBQU0sR0FBTixVQUFPLElBQVU7b0JBQ2IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFFRCwyQkFBUyxHQUFULFVBQVUsSUFBVTtvQkFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QyxDQUFDO2dCQUVELHNCQUFJLEdBQUo7b0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25DLENBQUM7Z0JBNUJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLE1BQU07d0JBQ2hCLFdBQVcsRUFBRSxtQkFBbUI7d0JBQ2hDLFNBQVMsRUFBRSxDQUFDLHVCQUFjLENBQUM7d0JBQzNCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsd0JBQWUsRUFBRSxxQkFBUyxDQUFDO3dCQUN6RCxLQUFLLEVBQUUsQ0FBQyxxQ0FBaUIsQ0FBQztxQkFDN0IsQ0FBQzs7MkJBQUE7Z0JBdUJGLGNBQUM7WUFBRCxDQUFDLEFBdEJELElBc0JDO1lBdEJELDZCQXNCQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnMsIENPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBDb250cm9sR3JvdXAsIENvbnRyb2wsIEZPUk1fUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuXHJcbmltcG9ydCB7VG9kb1NlcnZpY2UsIFRvZG99IGZyb20gJy4uL3NlcnZpY2VzL3RvZG9fc2VydmljZSc7XHJcbmltcG9ydCB7QXV0b2ZvY3VzfSBmcm9tICcuLi9kaXJlY3RpdmVzL0F1dG9mb2N1cyc7XHJcbmltcG9ydCB7Q3VzdG9tT3JkZXJCeVBpcGV9IGZyb20gJy4uL3BpcGVzL0N1c3RvbU9yZGVyQnlQaXBlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndG9kbycsIFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL3RvZG8uaHRtbCcsIFxyXG4gICAgcHJvdmlkZXJzOiBbRk9STV9QUk9WSURFUlNdLFxyXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBBdXRvZm9jdXNdLCAgXHJcbiAgICBwaXBlczogW0N1c3RvbU9yZGVyQnlQaXBlXSBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvZG9DbXAge1xyXG5cclxuICAgIHRvZG9Gb3JtOiBDb250cm9sR3JvdXA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0b2RvU2VydmljZTogVG9kb1NlcnZpY2UpIHsgXHJcbiAgICAgICAgdGhpcy50b2RvRm9ybSA9IG5ldyBDb250cm9sR3JvdXAoe1xyXG4gICAgICAgICAgICB0aXRsZTogbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE9uZSh0b2RvOiBUb2RvKSB7IFxyXG4gICAgICAgIHRoaXMudG9kb1NlcnZpY2UuYWRkT25lKHRvZG8pO1xyXG4gICAgICAgICg8Q29udHJvbD50aGlzLnRvZG9Gb3JtLmNvbnRyb2xzWyd0aXRsZSddKS51cGRhdGVWYWx1ZSgnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlT25lKHRvZG86IFRvZG8pIHsgXHJcbiAgICAgICAgdGhpcy50b2RvU2VydmljZS5yZW1vdmVPbmUodG9kby5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZCgpOiBUb2RvW10geyBcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvU2VydmljZS5maW5kKCk7XHJcbiAgICB9XHJcbn0gXHJcbiJdfQ==