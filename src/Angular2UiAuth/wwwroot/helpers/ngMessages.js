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
    var NgMessages;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Created by Ron on 19/12/2015.
             */
            NgMessages = (function () {
                function NgMessages() {
                    this.error = '';
                }
                NgMessages.prototype.ngOnChanges = function (changes) {
                    if (changes.errors.currentValue) {
                        for (var _i = 0, _a = Object.keys(changes.errors.currentValue); _i < _a.length; _i++) {
                            var errorProp = _a[_i];
                            if (changes.errors.currentValue[errorProp]) {
                                this.error = errorProp;
                                break;
                            }
                        }
                    }
                    else {
                        this.error = null;
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], NgMessages.prototype, "errors", void 0);
                NgMessages = __decorate([
                    core_1.Component({
                        selector: 'ng-messages',
                        template: '<p *ngIf="error" [ngSwitch]="error" class="text-danger help-block">' +
                            '<template ngSwitchWhen="required">Required</template>' +
                            '<template ngSwitchWhen="email">Invalid email address</template>' +
                            '<template ngSwitchWhen="minlength">Too short</template>' +
                            '<template ngSwitchWhen="maxlength">Too long</template>' +
                            '<template ngSwitchWhen="passwordMatch">Passwords don&apos;t match</template>' +
                            '<template ngSwitchDefault>Validation error</template>' +
                            '</p>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgMessages);
                return NgMessages;
            }());
            exports_1("NgMessages", NgMessages);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdNZXNzYWdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9oZWxwZXJzL25nTWVzc2FnZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFQTs7ZUFFRztZQWNIO2dCQUFBO29CQUNJLFVBQUssR0FBRyxFQUFFLENBQUM7Z0JBY2YsQ0FBQztnQkFaRyxnQ0FBVyxHQUFYLFVBQVksT0FBWTtvQkFDcEIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixHQUFHLENBQUMsQ0FBa0IsVUFBd0MsRUFBeEMsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQXhDLGNBQXdDLEVBQXhDLElBQXdDLENBQUM7NEJBQTFELElBQUksU0FBUyxTQUFBOzRCQUNkLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7Z0NBQ3ZCLEtBQUssQ0FBQzs0QkFDVixDQUFDO3lCQUNKO29CQUNMLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3RCLENBQUM7Z0JBQ0wsQ0FBQztnQkFaRDtvQkFBQyxZQUFLLEVBQUU7OzBEQUFBO2dCQWRaO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLGFBQWE7d0JBQ3ZCLFFBQVEsRUFDUixxRUFBcUU7NEJBQ3JFLHVEQUF1RDs0QkFDdkQsaUVBQWlFOzRCQUNqRSx5REFBeUQ7NEJBQ3pELHdEQUF3RDs0QkFDeEQsOEVBQThFOzRCQUM5RSx1REFBdUQ7NEJBQ3ZELE1BQU07cUJBQ1QsQ0FBQzs7OEJBQUE7Z0JBZ0JGLGlCQUFDO1lBQUQsQ0FBQyxBQWZELElBZUM7WUFmRCxtQ0FlQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUm9uIG9uIDE5LzEyLzIwMTUuXHJcbiAqL1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25nLW1lc3NhZ2VzJyxcclxuICAgIHRlbXBsYXRlOlxyXG4gICAgJzxwICpuZ0lmPVwiZXJyb3JcIiBbbmdTd2l0Y2hdPVwiZXJyb3JcIiBjbGFzcz1cInRleHQtZGFuZ2VyIGhlbHAtYmxvY2tcIj4nICtcclxuICAgICc8dGVtcGxhdGUgbmdTd2l0Y2hXaGVuPVwicmVxdWlyZWRcIj5SZXF1aXJlZDwvdGVtcGxhdGU+JyArXHJcbiAgICAnPHRlbXBsYXRlIG5nU3dpdGNoV2hlbj1cImVtYWlsXCI+SW52YWxpZCBlbWFpbCBhZGRyZXNzPC90ZW1wbGF0ZT4nICtcclxuICAgICc8dGVtcGxhdGUgbmdTd2l0Y2hXaGVuPVwibWlubGVuZ3RoXCI+VG9vIHNob3J0PC90ZW1wbGF0ZT4nICtcclxuICAgICc8dGVtcGxhdGUgbmdTd2l0Y2hXaGVuPVwibWF4bGVuZ3RoXCI+VG9vIGxvbmc8L3RlbXBsYXRlPicgK1xyXG4gICAgJzx0ZW1wbGF0ZSBuZ1N3aXRjaFdoZW49XCJwYXNzd29yZE1hdGNoXCI+UGFzc3dvcmRzIGRvbiZhcG9zO3QgbWF0Y2g8L3RlbXBsYXRlPicgK1xyXG4gICAgJzx0ZW1wbGF0ZSBuZ1N3aXRjaERlZmF1bHQ+VmFsaWRhdGlvbiBlcnJvcjwvdGVtcGxhdGU+JyArXHJcbiAgICAnPC9wPidcclxufSlcclxuZXhwb3J0IGNsYXNzIE5nTWVzc2FnZXMgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gICAgZXJyb3IgPSAnJztcclxuICAgIEBJbnB1dCgpIGVycm9yczogT2JqZWN0O1xyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KTogYW55IHsgLy9jaGFuZ2VzIGxvb2tzIGxpa2UgdGhpcyBjaGFuZ2VzLnRoZUlucHV0VmFyaWFibGUuY3VycmVudFZhbHVlL3ByZXZpb3VzVmFsdWVcclxuICAgICAgICBpZiAoY2hhbmdlcy5lcnJvcnMuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGVycm9yUHJvcCBvZiBPYmplY3Qua2V5cyhjaGFuZ2VzLmVycm9ycy5jdXJyZW50VmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hhbmdlcy5lcnJvcnMuY3VycmVudFZhbHVlW2Vycm9yUHJvcF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gZXJyb3JQcm9wO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19