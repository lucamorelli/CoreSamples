System.register(['@angular/core', '@angular/router-deprecated', '../views/home', '../views/todo', '../services/todo_service', '../views/insAttivita'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, home_1, todo_1, todo_service_1, insAttivita_1;
    var AppCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (insAttivita_1_1) {
                insAttivita_1 = insAttivita_1_1;
            }],
        execute: function() {
            AppCmp = (function () {
                function AppCmp() {
                }
                AppCmp = __decorate([
                    core_1.Component({
                        selector: 'app',
                        viewProviders: [todo_service_1.TodoService],
                        templateUrl: './app/app.html',
                        styleUrls: ['./app/app.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: home_1.HomeCmp, name: 'Home' },
                        { path: '/InsAttivita', component: insAttivita_1.InsAttivitaCmp, name: 'InsAttivita' },
                        { path: '/Todo', component: todo_1.TodoCmp, name: 'Todo' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppCmp);
                return AppCmp;
            }());
            exports_1("AppCmp", AppCmp);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF1QkE7Z0JBQUE7Z0JBQXNCLENBQUM7Z0JBYnZCO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsYUFBYSxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDNUIsV0FBVyxFQUFFLGdCQUFnQjt3QkFDN0IsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUM1QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTt3QkFDckMsVUFBVSxFQUFFLENBQUMscUNBQWlCLENBQUM7cUJBQ2xDLENBQUM7b0JBQ0QsK0JBQVcsQ0FBQzt3QkFDVCxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGNBQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO3dCQUMvQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLDRCQUFjLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTt3QkFDeEUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtxQkFDdEQsQ0FBQzs7MEJBQUE7Z0JBQ29CLGFBQUM7WUFBRCxDQUFDLEFBQXZCLElBQXVCO1lBQXZCLDJCQUF1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZyxST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5cclxuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi92aWV3cy9ob21lJztcclxuaW1wb3J0IHtUb2RvQ21wfSBmcm9tICcuLi92aWV3cy90b2RvJztcclxuaW1wb3J0IHtUb2RvU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdG9kb19zZXJ2aWNlJztcclxuaW1wb3J0IHtDbGllbnRlfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnRpX3NlcnZpY2UnO1xyXG5pbXBvcnQge0NsaWVudGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnRpX3NlcnZpY2UnO1xyXG5pbXBvcnQge0luc0F0dGl2aXRhQ21wfSBmcm9tICcuLi92aWV3cy9pbnNBdHRpdml0YSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJywgXHJcbiAgICB2aWV3UHJvdmlkZXJzOiBbVG9kb1NlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9hcHAuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAvYXBwLmNzcyddLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDbXAsIG5hbWU6ICdIb21lJyB9LFxyXG4gICAgeyBwYXRoOiAnL0luc0F0dGl2aXRhJywgY29tcG9uZW50OiBJbnNBdHRpdml0YUNtcCwgbmFtZTogJ0luc0F0dGl2aXRhJyB9LFxyXG4gICAgeyBwYXRoOiAnL1RvZG8nLCBjb21wb25lbnQ6IFRvZG9DbXAsIG5hbWU6ICdUb2RvJyB9XHJcbl0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDbXAgeyB9ICJdfQ==