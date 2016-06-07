System.register(['@angular/core', '@angular/router-deprecated', '../views/home', '../views/todo', '../services/todo_service', '../views/insAttivita', '../views/login', '../views/signup', 'ng2-ui-auth', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, home_1, todo_1, todo_service_1, insAttivita_1, login_1, signup_1, ng2_ui_auth_1, http_1;
    var GOOGLE_CLIENT_ID, AppCmp;
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
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (signup_1_1) {
                signup_1 = signup_1_1;
            },
            function (ng2_ui_auth_1_1) {
                ng2_ui_auth_1 = ng2_ui_auth_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            GOOGLE_CLIENT_ID = 'my_client_id.apps.googleusercontent.com';
            AppCmp = (function () {
                function AppCmp() {
                }
                AppCmp = __decorate([
                    core_1.Component({
                        selector: 'app',
                        providers: [
                            router_deprecated_1.ROUTER_PROVIDERS,
                            core_1.provide(router_deprecated_1.ROUTER_PRIMARY_COMPONENT, { useFactory: function () { return AppCmp; } }),
                            http_1.HTTP_PROVIDERS,
                            ng2_ui_auth_1.NG2_UI_AUTH_PROVIDERS({ providers: { google: { clientId: GOOGLE_CLIENT_ID } } }),
                        ],
                        viewProviders: [todo_service_1.TodoService],
                        templateUrl: './app/app.html',
                        styleUrls: ['./app/app.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                        directives: [login_1.Login, router_deprecated_1.ROUTER_DIRECTIVES],
                    }),
                    router_deprecated_1.RouteConfig([
                        { path: '/', component: home_1.HomeCmp, as: 'Home' },
                        { path: '/InsAttivita', component: insAttivita_1.InsAttivitaCmp, as: 'InsAttivita' },
                        { path: '/Todo', component: todo_1.TodoCmp, as: 'Todo' },
                        { path: '/login', name: 'Login', component: login_1.Login, useAsDefault: true },
                        { path: '/signup', name: 'Signup', component: signup_1.Signup },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppCmp);
                return AppCmp;
            }());
            exports_1("AppCmp", AppCmp);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQWNNLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUFoQixnQkFBZ0IsR0FBRyx5Q0FBeUMsQ0FBQztZQXVCbkU7Z0JBQUE7Z0JBQXNCLENBQUM7Z0JBckJ2QjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxLQUFLO3dCQUNmLFNBQVMsRUFBRTs0QkFDUCxvQ0FBZ0I7NEJBQ2hCLGNBQU8sQ0FBQyw0Q0FBd0IsRUFBRSxFQUFFLFVBQVUsRUFBRSxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sRUFBRSxDQUFDOzRCQUMvRCxxQkFBYzs0QkFDZCxtQ0FBcUIsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsQ0FBQzt5QkFDbkY7d0JBQ0QsYUFBYSxFQUFFLENBQUMsMEJBQVcsQ0FBQzt3QkFDNUIsV0FBVyxFQUFFLGdCQUFnQjt3QkFDN0IsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO3dCQUM1QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTt3QkFDckMsVUFBVSxFQUFFLENBQUMsYUFBSyxFQUFFLHFDQUFpQixDQUFDO3FCQUN6QyxDQUFDO29CQUNELCtCQUFXLENBQUM7d0JBQ1QsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxjQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTt3QkFDN0MsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSw0QkFBYyxFQUFFLEVBQUUsRUFBRSxhQUFhLEVBQUU7d0JBQ3RFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUU7d0JBQ2pELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxhQUFLLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRTt3QkFDdkUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGVBQU0sRUFBQztxQkFDeEQsQ0FBQzs7MEJBQUE7Z0JBQ29CLGFBQUM7WUFBRCxDQUFDLEFBQXZCLElBQXVCO1lBQXZCLDJCQUF1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uLCBwcm92aWRlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCwgUk9VVEVSX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyLWRlcHJlY2F0ZWQnO1xyXG5cclxuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi92aWV3cy9ob21lJztcclxuaW1wb3J0IHtUb2RvQ21wfSBmcm9tICcuLi92aWV3cy90b2RvJztcclxuaW1wb3J0IHtUb2RvU2VydmljZX0gZnJvbSAnLi4vc2VydmljZXMvdG9kb19zZXJ2aWNlJztcclxuaW1wb3J0IHtDbGllbnRlfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnRpX3NlcnZpY2UnO1xyXG5pbXBvcnQge0NsaWVudGlTZXJ2aWNlfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnRpX3NlcnZpY2UnO1xyXG5pbXBvcnQge0luc0F0dGl2aXRhQ21wfSBmcm9tICcuLi92aWV3cy9pbnNBdHRpdml0YSc7XHJcbmltcG9ydCB7TG9naW59IGZyb20gJy4uL3ZpZXdzL2xvZ2luJztcclxuaW1wb3J0IHtTaWdudXB9IGZyb20gJy4uL3ZpZXdzL3NpZ251cCc7XHJcbmltcG9ydCB7TkcyX1VJX0FVVEhfUFJPVklERVJTfSBmcm9tICduZzItdWktYXV0aCc7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuY29uc3QgR09PR0xFX0NMSUVOVF9JRCA9ICdteV9jbGllbnRfaWQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcCcsIFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgUk9VVEVSX1BST1ZJREVSUyxcclxuICAgICAgICBwcm92aWRlKFJPVVRFUl9QUklNQVJZX0NPTVBPTkVOVCwgeyB1c2VGYWN0b3J5OiAoKSA9PiBBcHBDbXAgfSksXHJcbiAgICAgICAgSFRUUF9QUk9WSURFUlMsXHJcbiAgICAgICAgTkcyX1VJX0FVVEhfUFJPVklERVJTKHsgcHJvdmlkZXJzOiB7IGdvb2dsZTogeyBjbGllbnRJZDogR09PR0xFX0NMSUVOVF9JRCB9IH0gfSksXHJcbiAgICBdLFxyXG4gICAgdmlld1Byb3ZpZGVyczogW1RvZG9TZXJ2aWNlXSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvYXBwLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYXBwL2FwcC5jc3MnXSxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBkaXJlY3RpdmVzOiBbTG9naW4sIFJPVVRFUl9ESVJFQ1RJVkVTXSxcclxufSlcclxuQFJvdXRlQ29uZmlnKFtcclxuICAgIHsgcGF0aDogJy8nLCBjb21wb25lbnQ6IEhvbWVDbXAsIGFzOiAnSG9tZScgfSxcclxuICAgIHsgcGF0aDogJy9JbnNBdHRpdml0YScsIGNvbXBvbmVudDogSW5zQXR0aXZpdGFDbXAsIGFzOiAnSW5zQXR0aXZpdGEnIH0sXHJcbiAgICB7IHBhdGg6ICcvVG9kbycsIGNvbXBvbmVudDogVG9kb0NtcCwgYXM6ICdUb2RvJyB9LFxyXG4gICAgeyBwYXRoOiAnL2xvZ2luJywgbmFtZTogJ0xvZ2luJywgY29tcG9uZW50OiBMb2dpbiwgdXNlQXNEZWZhdWx0OiB0cnVlIH0sXHJcbiAgICB7IHBhdGg6ICcvc2lnbnVwJywgbmFtZTogJ1NpZ251cCcsIGNvbXBvbmVudDogU2lnbnVwfSxcclxuXSlcclxuZXhwb3J0IGNsYXNzIEFwcENtcCB7IH0gIl19