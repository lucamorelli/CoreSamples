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
    var core_1, common_1, router_deprecated_1, ng2_ui_auth_1, ngMessages_1, customValidators_1;
    var Login;
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
            }],
        execute: function() {
            /**
             * Created by Ron on 18/12/2015.
             */
            Login = (function () {
                function Login(auth, router, element, renderer, fb) {
                    this.auth = auth;
                    this.router = router;
                    this.element = element;
                    this.renderer = renderer;
                    this.fb = fb;
                    this.user = { email: '', password: '' };
                }
                Login.prototype.login = function () {
                    var _this = this;
                    this.auth.login(this.user)
                        .subscribe(function () { return _this.goToMain(); });
                };
                Login.prototype.authenticate = function (provider) {
                    var _this = this;
                    this.auth.authenticate(provider)
                        .subscribe(function () { return _this.goToMain(); });
                };
                Login.prototype.goToMain = function () {
                    this.router.navigate(['Main']);
                };
                Login.prototype.ngAfterContentInit = function () {
                    this.renderer.setElementClass(this.element.nativeElement, 'app', true);
                    if (this.auth.isAuthenticated()) {
                        this.goToMain();
                    }
                };
                Login.prototype.ngOnInit = function () {
                    this.form = this.fb.group({
                        email: new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, customValidators_1.EmailValidator.validate])),
                        password: new common_1.Control('', common_1.Validators.required)
                    });
                };
                Login = __decorate([
                    core_1.Component({
                        selector: 'app-login',
                        templateUrl: './views/login.html',
                        directives: [ngMessages_1.NgMessages, router_deprecated_1.ROUTER_DIRECTIVES, customValidators_1.EmailValidator],
                    }), 
                    __metadata('design:paramtypes', [ng2_ui_auth_1.Auth, router_deprecated_1.Router, core_1.ElementRef, core_1.Renderer, common_1.FormBuilder])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvdmlld3MvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPQTs7ZUFFRztZQU9IO2dCQWdDSSxlQUFvQixJQUFVLEVBQ2xCLE1BQWMsRUFDZCxPQUFtQixFQUNuQixRQUFrQixFQUNsQixFQUFlO29CQUpQLFNBQUksR0FBSixJQUFJLENBQU07b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQVE7b0JBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBWTtvQkFDbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtvQkFDbEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtvQkFuQzNCLFNBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQW9DbkMsQ0FBQztnQkFqQ0QscUJBQUssR0FBTDtvQkFBQSxpQkFHQztvQkFGRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO3lCQUNyQixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxRQUFRLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCw0QkFBWSxHQUFaLFVBQWEsUUFBZ0I7b0JBQTdCLGlCQUdDO29CQUZHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQzt5QkFDM0IsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsd0JBQVEsR0FBUjtvQkFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsa0NBQWtCLEdBQWxCO29CQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDdkUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDTCxDQUFDO2dCQUVELHdCQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFDdEIsS0FBSyxFQUFFLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxpQ0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzFGLFFBQVEsRUFBRSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3FCQUNqRCxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFuQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsV0FBVzt3QkFDckIsV0FBVyxFQUFFLG9CQUFvQjt3QkFDakMsVUFBVSxFQUFFLENBQUMsdUJBQVUsRUFBRSxxQ0FBaUIsRUFBRSxpQ0FBYyxDQUFDO3FCQUM5RCxDQUFDOzt5QkFBQTtnQkF1Q0YsWUFBQztZQUFELENBQUMsQUF0Q0QsSUFzQ0M7WUF0Q0QseUJBc0NDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0NvbXBvbmVudCwgQWZ0ZXJDb250ZW50SW5pdCwgRWxlbWVudFJlZiwgUmVuZGVyZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2xHcm91cCwgQ29udHJvbCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdAYW5ndWxhci9yb3V0ZXItZGVwcmVjYXRlZCc7XHJcbmltcG9ydCB7QXV0aH0gZnJvbSAnbmcyLXVpLWF1dGgnO1xyXG5pbXBvcnQge05nTWVzc2FnZXN9IGZyb20gJy4uL2hlbHBlcnMvbmdNZXNzYWdlcyc7XHJcbmltcG9ydCB7RW1haWxWYWxpZGF0b3J9IGZyb20gJy4uL2hlbHBlcnMvY3VzdG9tVmFsaWRhdG9ycyc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSBSb24gb24gMTgvMTIvMjAxNS5cclxuICovXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWxvZ2luJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9sb2dpbi5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtOZ01lc3NhZ2VzLCBST1VURVJfRElSRUNUSVZFUywgRW1haWxWYWxpZGF0b3JdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkluaXQge1xyXG4gICAgdXNlciA9IHsgZW1haWw6ICcnLCBwYXNzd29yZDogJycgfTtcclxuICAgIGZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcbiAgICBsb2dpbigpIHtcclxuICAgICAgICB0aGlzLmF1dGgubG9naW4odGhpcy51c2VyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ29Ub01haW4oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aGVudGljYXRlKHByb3ZpZGVyOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmF1dGguYXV0aGVudGljYXRlKHByb3ZpZGVyKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuZ29Ub01haW4oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub01haW4oKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydNYWluJ10pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2FwcCcsIHRydWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmF1dGguaXNBdXRoZW50aWNhdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nb1RvTWFpbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgZW1haWw6IG5ldyBDb250cm9sKCcnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEVtYWlsVmFsaWRhdG9yLnZhbGlkYXRlXSkpLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogbmV3IENvbnRyb2woJycsIFZhbGlkYXRvcnMucmVxdWlyZWQpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyLFxyXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XHJcbiAgICB9XHJcbn0iXX0=