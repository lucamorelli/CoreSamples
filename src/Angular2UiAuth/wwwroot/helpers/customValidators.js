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
    var EmailValidator, PasswordMatchValidator, D_VALIDATORS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Created by Ron on 19/12/2015.
             */
            EmailValidator = (function () {
                function EmailValidator() {
                }
                EmailValidator.validate = function (control) {
                    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                    if (control.value === '' || re.test(control.value)) {
                        return null;
                    }
                    return { email: true };
                };
                EmailValidator.prototype.validate = function (control) {
                    return EmailValidator.validate(control);
                };
                EmailValidator = __decorate([
                    core_1.Directive({
                        selector: '[dEmail]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmailValidator);
                return EmailValidator;
            }());
            exports_1("EmailValidator", EmailValidator);
            PasswordMatchValidator = (function () {
                function PasswordMatchValidator() {
                }
                PasswordMatchValidator.validate = function (control) {
                    var firstValue;
                    if (Object.keys(control.controls).every(function (key) {
                        if (firstValue === undefined) {
                            firstValue = control.controls[key].value;
                        }
                        return control.controls[key].value === firstValue;
                    })) {
                        return null;
                    }
                    return { passwordMatch: true };
                };
                PasswordMatchValidator = __decorate([
                    core_1.Directive({
                        selector: '[dPasswordMatch]'
                    }), 
                    __metadata('design:paramtypes', [])
                ], PasswordMatchValidator);
                return PasswordMatchValidator;
            }());
            exports_1("PasswordMatchValidator", PasswordMatchValidator);
            exports_1("D_VALIDATORS", D_VALIDATORS = [EmailValidator]);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tVmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9oZWxwZXJzL2N1c3RvbVZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztnREErQ2EsWUFBWTs7Ozs7OztZQXRDekI7O2VBRUc7WUFLSDtnQkFBQTtnQkFZQSxDQUFDO2dCQVhVLHVCQUFRLEdBQWYsVUFBZ0IsT0FBZ0I7b0JBQzVCLElBQUksRUFBRSxHQUFHLG9GQUFvRixDQUFDO29CQUM5RixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxPQUFnQjtvQkFDckIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBZEw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsVUFBVTtxQkFDdkIsQ0FBQzs7a0NBQUE7Z0JBYUYscUJBQUM7WUFBRCxDQUFDLEFBWkQsSUFZQztZQVpELDJDQVlDLENBQUE7WUFLRDtnQkFBQTtnQkFhQSxDQUFDO2dCQVpVLCtCQUFRLEdBQWYsVUFBZ0IsT0FBcUI7b0JBQ2pDLElBQUksVUFBVSxDQUFDO29CQUNmLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQUc7d0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDOzRCQUMzQixVQUFVLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzdDLENBQUM7d0JBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQztvQkFDdEQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQ0QsTUFBTSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNuQyxDQUFDO2dCQWZMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtxQkFDL0IsQ0FBQzs7MENBQUE7Z0JBY0YsNkJBQUM7WUFBRCxDQUFDLEFBYkQsSUFhQztZQWJELDJEQWFDLENBQUE7WUFDWSwwQkFBQSxZQUFZLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHtcclxuICAgIERpcmVjdGl2ZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgICBDb250cm9sLFxyXG4gICAgVmFsaWRhdG9yLCBDb250cm9sR3JvdXAsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJvbiBvbiAxOS8xMi8yMDE1LlxyXG4gKi9cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbZEVtYWlsXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEVtYWlsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcclxuICAgIHN0YXRpYyB2YWxpZGF0ZShjb250cm9sOiBDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xyXG4gICAgICAgIGxldCByZSA9IC9eKFtcXHctXSsoPzpcXC5bXFx3LV0rKSopQCgoPzpbXFx3LV0rXFwuKSpcXHdbXFx3LV17MCw2Nn0pXFwuKFthLXpdezIsNn0oPzpcXC5bYS16XXsyfSk/KSQvaTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PT0gJycgfHwgcmUudGVzdChjb250cm9sLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgZW1haWw6IHRydWUgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZShjb250cm9sOiBDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0ge1xyXG4gICAgICAgIHJldHVybiBFbWFpbFZhbGlkYXRvci52YWxpZGF0ZShjb250cm9sKTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ1tkUGFzc3dvcmRNYXRjaF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYXNzd29yZE1hdGNoVmFsaWRhdG9yIHtcclxuICAgIHN0YXRpYyB2YWxpZGF0ZShjb250cm9sOiBDb250cm9sR3JvdXApIHtcclxuICAgICAgICBsZXQgZmlyc3RWYWx1ZTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoY29udHJvbC5jb250cm9scykuZXZlcnkoKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlyc3RWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBmaXJzdFZhbHVlID0gY29udHJvbC5jb250cm9sc1trZXldLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sLmNvbnRyb2xzW2tleV0udmFsdWUgPT09IGZpcnN0VmFsdWU7XHJcbiAgICAgICAgfSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7IHBhc3N3b3JkTWF0Y2g6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgRF9WQUxJREFUT1JTID0gW0VtYWlsVmFsaWRhdG9yXTsiXX0=