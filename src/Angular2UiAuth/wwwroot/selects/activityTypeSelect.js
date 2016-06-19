System.register(['@angular/core', "@angular/common", '../services/tabelle_service'], function(exports_1, context_1) {
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
    var core_1, core_2, common_1, tabelle_service_1;
    var noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, activityTypeSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (tabelle_service_1_1) {
                tabelle_service_1 = tabelle_service_1_1;
            }],
        execute: function() {
            noop = function () { };
            CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return activityTypeSelect; }),
                multi: true
            });
            // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
            activityTypeSelect = (function () {
                function activityTypeSelect(tabelleService) {
                    this.tabelleService = tabelleService;
                    //@Input()
                    this.selezioneTipoAttivita = new core_2.EventEmitter();
                    //Placeholders for the callbacks
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                }
                activityTypeSelect.prototype.ngOnInit = function () {
                    var _this = this;
                    this.tabelleService.getTipiAttivita()
                        .subscribe(function (data) {
                        _this.TipiAttivita = data;
                    }, function (err) {
                        alert(err);
                    }, function () {
                        //                alert("fatto");
                    });
                };
                activityTypeSelect.prototype.selezionaTipoAttivita = function ($event) {
                    this.selezioneTipoAttivita.emit(this.tipoAttivitaNo);
                };
                Object.defineProperty(activityTypeSelect.prototype, "value", {
                    //get accessor
                    get: function () { return this.tipoAttivitaNo; },
                    //set accessor including call the onchange callback
                    set: function (v) {
                        if (v !== this.tipoAttivitaNo) {
                            this.tipoAttivitaNo = v;
                            this._onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                //Set touched on blur
                activityTypeSelect.prototype.onTouched = function () {
                    this._onTouchedCallback(undefined);
                };
                //From ControlValueAccessor interface
                activityTypeSelect.prototype.writeValue = function (value) {
                    this.tipoAttivitaNo = value;
                };
                //From ControlValueAccessor interface
                activityTypeSelect.prototype.registerOnChange = function (fn) {
                    this._onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                activityTypeSelect.prototype.registerOnTouched = function (fn) {
                    this._onTouchedCallback = fn;
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_2.EventEmitter)
                ], activityTypeSelect.prototype, "selezioneTipoAttivita", void 0);
                activityTypeSelect = __decorate([
                    core_1.Component({
                        selector: 'activity-type-select',
                        templateUrl: './selects/activityTypeSelect.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, tabelle_service_1.TabelleService]
                    }), 
                    __metadata('design:paramtypes', [tabelle_service_1.TabelleService])
                ], activityTypeSelect);
                return activityTypeSelect;
            }());
            exports_1("activityTypeSelect", activityTypeSelect);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZpdHlUeXBlU2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3NlbGVjdHMvYWN0aXZpdHlUeXBlU2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7UUFNTSxJQUFJLEVBRUosbUNBQW1DOzs7Ozs7Ozs7Ozs7OztZQUZuQyxJQUFJLEdBQUcsY0FBUSxDQUFDLENBQUM7WUFFakIsbUNBQW1DLEdBQUcsSUFBSSxlQUFRLENBQ3BELDBCQUFpQixFQUFFO2dCQUNmLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxrQkFBa0IsRUFBbEIsQ0FBa0IsQ0FBQztnQkFDakQsS0FBSyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7WUFFUCw0RUFBNEU7WUFPNUU7Z0JBVUksNEJBQW1CLGNBQThCO29CQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBTGpELFVBQVU7b0JBR0gsMEJBQXFCLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQXFCeEUsZ0NBQWdDO29CQUN4Qix1QkFBa0IsR0FBcUIsSUFBSSxDQUFDO29CQUU1QyxzQkFBaUIsR0FBcUIsSUFBSSxDQUFDO2dCQXBCbkQsQ0FBQztnQkFFTSxxQ0FBUSxHQUFmO29CQUFBLGlCQVNDO29CQVJHLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFO3lCQUNoQyxTQUFTLENBQUMsVUFBQSxJQUFJO3dCQUNYLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO29CQUM3QixDQUFDLEVBQUUsVUFBQSxHQUFHO3dCQUNGLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDZCxDQUFDLEVBQUU7d0JBQ0MsaUNBQWlDO29CQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFDWCxDQUFDO2dCQUVNLGtEQUFxQixHQUE1QixVQUE2QixNQUFXO29CQUNwQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDekQsQ0FBQztnQkFRRCxzQkFBSSxxQ0FBSztvQkFEVCxjQUFjO3lCQUNkLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFFaEQsbURBQW1EO3lCQUNuRCxVQUFVLENBQU07d0JBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDOzRCQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzs0QkFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5QixDQUFDO29CQUNMLENBQUM7OzttQkFSK0M7O2dCQVVoRCxxQkFBcUI7Z0JBQ3JCLHNDQUFTLEdBQVQ7b0JBQ0ksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsdUNBQVUsR0FBVixVQUFXLEtBQVU7b0JBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsNkNBQWdCLEdBQWhCLFVBQWlCLEVBQU87b0JBQ3BCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyw4Q0FBaUIsR0FBakIsVUFBa0IsRUFBTztvQkFDckIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztnQkFDakMsQ0FBQztnQkF4REQ7b0JBQUMsYUFBTSxFQUFFOztpRkFBQTtnQkFiYjtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRSxzQkFBc0I7d0JBQ2hDLFdBQVcsRUFBRSxtQ0FBbUM7d0JBQ2hELFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7d0JBQzdCLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLGdDQUFjLENBQUM7cUJBQ25FLENBQUM7O3NDQUFBO2dCQWlFRix5QkFBQztZQUFELENBQUMsQUFoRUQsSUFnRUM7WUFoRUQsbURBZ0VDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgUHJvdmlkZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge091dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge1RhYmVsbGVTZXJ2aWNlLCBUaXBvQXR0aXZpdGF9IGZyb20gJy4uL3NlcnZpY2VzL3RhYmVsbGVfc2VydmljZSc7XHJcblxyXG5jb25zdCBub29wID0gKCkgPT4geyB9O1xyXG5cclxuY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IgPSBuZXcgUHJvdmlkZXIoXHJcbiAgICBOR19WQUxVRV9BQ0NFU1NPUiwge1xyXG4gICAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IGFjdGl2aXR5VHlwZVNlbGVjdCksXHJcbiAgICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0pO1xyXG5cclxuLy8gaHR0cDovL2FsbWVyb3N0ZXluLmNvbS8yMDE2LzA0L2xpbmt1cC1jdXN0b20tY29udHJvbC10by1uZ2NvbnRyb2wtbmdtb2RlbFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYWN0aXZpdHktdHlwZS1zZWxlY3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdHMvYWN0aXZpdHlUeXBlU2VsZWN0Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW0NPUkVfRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiwgVGFiZWxsZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBhY3Rpdml0eVR5cGVTZWxlY3QgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAgIHB1YmxpYyBUaXBpQXR0aXZpdGE6IFRpcG9BdHRpdml0YVtdO1xyXG5cclxuICAgIHB1YmxpYyB0aXBvQXR0aXZpdGFObzogbnVtYmVyO1xyXG5cclxuICAgIC8vQElucHV0KClcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBzZWxlemlvbmVUaXBvQXR0aXZpdGE6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0YWJlbGxlU2VydmljZTogVGFiZWxsZVNlcnZpY2UpIHsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnRhYmVsbGVTZXJ2aWNlLmdldFRpcGlBdHRpdml0YSgpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRpcGlBdHRpdml0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGFsZXJ0KFwiZmF0dG9cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlemlvbmFUaXBvQXR0aXZpdGEoJGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGV6aW9uZVRpcG9BdHRpdml0YS5lbWl0KHRoaXMudGlwb0F0dGl2aXRhTm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXHJcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XHJcblxyXG4gICAgLy9nZXQgYWNjZXNzb3JcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy50aXBvQXR0aXZpdGFObzsgfTtcclxuXHJcbiAgICAvL3NldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcclxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICBpZiAodiAhPT0gdGhpcy50aXBvQXR0aXZpdGFObykge1xyXG4gICAgICAgICAgICB0aGlzLnRpcG9BdHRpdml0YU5vID0gdjtcclxuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9TZXQgdG91Y2hlZCBvbiBibHVyXHJcbiAgICBvblRvdWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLnRpcG9BdHRpdml0YU5vID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG59Il19