System.register(['@angular/core', '@angular/common', '@angular/router-deprecated', 'ng2-ui-auth', '../helpers/ngMessages', '../helpers/customValidators'], function(exports_1, context_1) {
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
    var core_1, common_1, router_deprecated_1, ng2_ui_auth_1, ngMessages_1, customValidators_1, customValidators_2;
    var Signup;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (ng2_ui_auth_1_1) {
                ng2_ui_auth_1 = ng2_ui_auth_1_1;
            },
            function (ngMessages_1_1) {
                ngMessages_1 = ngMessages_1_1;
            },
            function (customValidators_1_1) {
                customValidators_1 = customValidators_1_1;
                customValidators_2 = customValidators_1_1;
            }],
        execute: function() {
            Signup = (function () {
                function Signup(auth, router, element, renderer, fb) {
                    this.auth = auth;
                    this.router = router;
                    this.element = element;
                    this.renderer = renderer;
                    this.fb = fb;
                    this.user = {};
                }
                Signup.prototype.signup = function () {
                    var _this = this;
                    this.auth.signup({ email: this.user.email, password: this.user.password })
                        .subscribe(function () {
                        _this.auth.login({ email: _this.user.email, password: _this.user.password })
                            .subscribe(function () {
                            if (_this.auth.isAuthenticated()) {
                                _this.router.navigate(['Main']);
                            }
                        });
                    });
                };
                Signup.prototype.ngAfterContentInit = function () {
                    this.renderer.setElementClass(this.element.nativeElement, 'app', true);
                };
                Signup.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        displayName: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.maxLength(32)])),
                        email: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, customValidators_1.EmailValidator.validate])),
                        passwordGroup: new common_1.ControlGroup({
                            password: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6), common_1.Validators.maxLength(32)])),
                            confirmPassword: new common_1.Control('')
                        }, null, customValidators_2.PasswordMatchValidator.validate)
                    });
                };
                Signup = __decorate([
                    core_1.Component({
                        selector: 'app-signup',
                        templateUrl: './src/signup/signup.html',
                        directives: [ngMessages_1.NgMessages, router_deprecated_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, customValidators_1.EmailValidator, customValidators_2.PasswordMatchValidator],
                    }), 
                    __metadata('design:paramtypes', [ng2_ui_auth_1.Auth, router_deprecated_1.Router, core_1.ElementRef, core_1.Renderer, common_1.FormBuilder])
                ], Signup);
                return Signup;
            }());
            exports_1("Signup", Signup);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3ZpZXdzL3NpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBK0JJLGdCQUFvQixJQUFVLEVBQ2xCLE1BQWMsRUFDZCxPQUFtQixFQUNuQixRQUFrQixFQUNsQixFQUFlO29CQUpQLFNBQUksR0FBSixJQUFJLENBQU07b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFDbEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtvQkFsQzNCLFNBQUksR0FBUSxFQUFFLENBQUM7Z0JBb0NmLENBQUM7Z0JBbENELHVCQUFNLEdBQU47b0JBQUEsaUJBVUM7b0JBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7eUJBQ3JFLFNBQVMsQ0FBQzt3QkFDUCxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzs2QkFDcEUsU0FBUyxDQUFDOzRCQUNQLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dDQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7NEJBQ25DLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxtQ0FBa0IsR0FBbEI7b0JBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzRSxDQUFDO2dCQUNELHlCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDdEIsV0FBVyxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pHLEtBQUssRUFBRSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsaUNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMxRixhQUFhLEVBQUUsSUFBSSxxQkFBWSxDQUMzQjs0QkFDSSxRQUFRLEVBQUUsSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDdkgsZUFBZSxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLENBQUM7eUJBQ25DLEVBQ0QsSUFBSSxFQUNKLHlDQUFzQixDQUFDLFFBQVEsQ0FDbEM7cUJBQ0osQ0FBQyxDQUFDO2dCQUNQLENBQUM7Z0JBbkNMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFdBQVcsRUFBRSwwQkFBMEI7d0JBQ3ZDLFVBQVUsRUFBRSxDQUFDLHVCQUFVLEVBQUUscUNBQWlCLEVBQUUsd0JBQWUsRUFBRSxpQ0FBYyxFQUFFLHlDQUFzQixDQUFDO3FCQUN2RyxDQUFDOzswQkFBQTtnQkF1Q0YsYUFBQztZQUFELENBQUMsQUF0Q0QsSUFzQ0M7WUF0Q0QsMkJBc0NDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rk9STV9ESVJFQ1RJVkVTLCBGb3JtQnVpbGRlciwgQ29udHJvbEdyb3VwLCBDb250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1JvdXRlciwgUk9VVEVSX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlci1kZXByZWNhdGVkJztcclxuaW1wb3J0IHtBdXRofSBmcm9tICduZzItdWktYXV0aCc7XHJcbmltcG9ydCB7TmdNZXNzYWdlc30gZnJvbSAnLi4vaGVscGVycy9uZ01lc3NhZ2VzJztcclxuaW1wb3J0IHtFbWFpbFZhbGlkYXRvcn0gZnJvbSAnLi4vaGVscGVycy9jdXN0b21WYWxpZGF0b3JzJztcclxuaW1wb3J0IHtQYXNzd29yZE1hdGNoVmFsaWRhdG9yfSBmcm9tICcuLi9oZWxwZXJzL2N1c3RvbVZhbGlkYXRvcnMnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUm9uIG9uIDE4LzEyLzIwMTUuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElTaWdudXAge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWdudXAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NyYy9zaWdudXAvc2lnbnVwLmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW05nTWVzc2FnZXMsIFJPVVRFUl9ESVJFQ1RJVkVTLCBGT1JNX0RJUkVDVElWRVMsIEVtYWlsVmFsaWRhdG9yLCBQYXNzd29yZE1hdGNoVmFsaWRhdG9yXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uSW5pdCB7XHJcbiAgICB1c2VyOiBhbnkgPSB7fTtcclxuICAgIGZvcm06IENvbnRyb2xHcm91cDtcclxuICAgIHNpZ251cCgpIHtcclxuICAgICAgICB0aGlzLmF1dGguc2lnbnVwKHsgZW1haWw6IHRoaXMudXNlci5lbWFpbCwgcGFzc3dvcmQ6IHRoaXMudXNlci5wYXNzd29yZCB9KVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aC5sb2dpbih7IGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0aC5pc0F1dGhlbnRpY2F0ZWQoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydNYWluJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCk6IGFueSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhcHAnLCB0cnVlKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzIpXSkpLFxyXG4gICAgICAgICAgICBlbWFpbDogbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgRW1haWxWYWxpZGF0b3IudmFsaWRhdGVdKSksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkR3JvdXA6IG5ldyBDb250cm9sR3JvdXAoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDYpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzMildKSksXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiBuZXcgQ29udHJvbCgnJylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgUGFzc3dvcmRNYXRjaFZhbGlkYXRvci52YWxpZGF0ZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGgsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuXHJcbiAgICB9XHJcbn0iXX0=