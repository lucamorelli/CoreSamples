System.register(['@angular/core', "@angular/common", '../services'], function(exports_1, context_1) {
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
    var core_1, core_2, common_1, services_1;
    var noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, customerLocationSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            }],
        execute: function() {
            noop = function () { };
            CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return customerLocationSelect; }),
                multi: true
            });
            // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
            customerLocationSelect = (function () {
                function customerLocationSelect(clientiService) {
                    this.clientiService = clientiService;
                    this.selezioneLocazione = new core_2.EventEmitter();
                    //Placeholders for the callbacks
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                }
                customerLocationSelect.prototype.ngOnInit = function () {
                };
                customerLocationSelect.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    for (var propName in changes) {
                        var prop = changes[propName];
                        var cur = JSON.stringify(prop.currentValue);
                        var prev = JSON.stringify(prop.previousValue);
                        if (propName == "clienteNo" && this.clienteNo != undefined) {
                            this.clientiService.locazioni(this.clienteNo)
                                .subscribe(function (data) {
                                _this.Locazioni = data;
                            }, function (err) {
                                alert(err);
                            }, function () {
                                //                alert("fatto");
                            });
                        }
                    }
                };
                customerLocationSelect.prototype.selezionaLocazione = function ($event) {
                    this.selezioneLocazione.emit(this.clienteNo);
                };
                Object.defineProperty(customerLocationSelect.prototype, "value", {
                    //get accessor
                    get: function () { return this.clienteNo; },
                    //set accessor including call the onchange callback
                    set: function (v) {
                        if (v !== this.locazioneNo) {
                            this.locazioneNo = v;
                            this._onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                //Set touched on blur
                customerLocationSelect.prototype.onTouched = function () {
                    this._onTouchedCallback(undefined);
                };
                //From ControlValueAccessor interface
                customerLocationSelect.prototype.writeValue = function (value) {
                    this.locazioneNo = value;
                };
                //From ControlValueAccessor interface
                customerLocationSelect.prototype.registerOnChange = function (fn) {
                    this._onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                customerLocationSelect.prototype.registerOnTouched = function (fn) {
                    this._onTouchedCallback = fn;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], customerLocationSelect.prototype, "clienteNo", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_2.EventEmitter)
                ], customerLocationSelect.prototype, "selezioneLocazione", void 0);
                customerLocationSelect = __decorate([
                    core_1.Component({
                        selector: 'customer-location-select',
                        templateUrl: './selects/customerLocationSelect.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, services_1.ClientiService]
                    }), 
                    __metadata('design:paramtypes', [services_1.ClientiService])
                ], customerLocationSelect);
                return customerLocationSelect;
            }());
            exports_1("customerLocationSelect", customerLocationSelect);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJMb2NhdGlvblNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9zZWxlY3RzL2N1c3RvbWVyTG9jYXRpb25TZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQU1NLElBQUksRUFFSixtQ0FBbUM7Ozs7Ozs7Ozs7Ozs7O1lBRm5DLElBQUksR0FBRyxjQUFRLENBQUMsQ0FBQztZQUVqQixtQ0FBbUMsR0FBRyxJQUFJLGVBQVEsQ0FDcEQsMEJBQWlCLEVBQUU7Z0JBQ2YsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFzQixFQUF0QixDQUFzQixDQUFDO2dCQUNyRCxLQUFLLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUVQLDRFQUE0RTtZQU81RTtnQkFXSSxnQ0FBbUIsY0FBOEI7b0JBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFGMUMsdUJBQWtCLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQW1DckUsZ0NBQWdDO29CQUN4Qix1QkFBa0IsR0FBcUIsSUFBSSxDQUFDO29CQUU1QyxzQkFBaUIsR0FBcUIsSUFBSSxDQUFDO2dCQWxDbkQsQ0FBQztnQkFFTSx5Q0FBUSxHQUFmO2dCQUNBLENBQUM7Z0JBRUQsNENBQVcsR0FBWCxVQUFZLE9BQWlEO29CQUE3RCxpQkFrQkM7b0JBakJHLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUU5QyxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDekQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQ0FDeEMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQ0FDWCxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs0QkFDMUIsQ0FBQyxFQUFFLFVBQUEsR0FBRztnQ0FDRixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ2QsQ0FBQyxFQUFFO2dDQUNDLGlDQUFpQzs0QkFDckMsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFFTCxDQUFDO2dCQUNMLENBQUM7Z0JBSU0sbURBQWtCLEdBQXpCLFVBQTBCLE1BQVc7b0JBQ2pDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQVFELHNCQUFJLHlDQUFLO29CQURULGNBQWM7eUJBQ2QsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUUzQyxtREFBbUQ7eUJBQ25ELFVBQVUsQ0FBTTt3QkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDOzRCQUNyQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLENBQUM7b0JBQ0wsQ0FBQzs7O21CQVIwQzs7Z0JBVTNDLHFCQUFxQjtnQkFDckIsMENBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQywyQ0FBVSxHQUFWLFVBQVcsS0FBVTtvQkFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyxpREFBZ0IsR0FBaEIsVUFBaUIsRUFBTztvQkFDcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLGtEQUFpQixHQUFqQixVQUFrQixFQUFPO29CQUNyQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxDQUFDO2dCQTNFRDtvQkFBQyxZQUFLLEVBQUU7O3lFQUFBO2dCQUtSO29CQUFDLGFBQU0sRUFBRTs7a0ZBQUE7Z0JBZGI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsMEJBQTBCO3dCQUNwQyxXQUFXLEVBQUUsdUNBQXVDO3dCQUNwRCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO3dCQUM3QixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSx5QkFBYyxDQUFDO3FCQUNuRSxDQUFDOzswQ0FBQTtnQkFnRkYsNkJBQUM7WUFBRCxDQUFDLEFBL0VELElBK0VDO1lBL0VELDJEQStFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFByb3ZpZGVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge0NsaWVudGlTZXJ2aWNlLCBMb2NhemlvbmV9IGZyb20gJy4uL3NlcnZpY2VzJztcclxuXHJcbmNvbnN0IG5vb3AgPSAoKSA9PiB7IH07XHJcblxyXG5jb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IG5ldyBQcm92aWRlcihcclxuICAgIE5HX1ZBTFVFX0FDQ0VTU09SLCB7XHJcbiAgICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gY3VzdG9tZXJMb2NhdGlvblNlbGVjdCksXHJcbiAgICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0pO1xyXG5cclxuLy8gaHR0cDovL2FsbWVyb3N0ZXluLmNvbS8yMDE2LzA0L2xpbmt1cC1jdXN0b20tY29udHJvbC10by1uZ2NvbnRyb2wtbmdtb2RlbFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY3VzdG9tZXItbG9jYXRpb24tc2VsZWN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3RzL2N1c3RvbWVyTG9jYXRpb25TZWxlY3QuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbQ09SRV9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLCBDbGllbnRpU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIGN1c3RvbWVyTG9jYXRpb25TZWxlY3QgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAgIHB1YmxpYyBMb2Nhemlvbmk6IExvY2F6aW9uZVtdO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgY2xpZW50ZU5vOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGxvY2F6aW9uZU5vOiBudW1iZXI7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgc2VsZXppb25lTG9jYXppb25lOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2xpZW50aVNlcnZpY2U6IENsaWVudGlTZXJ2aWNlKSB7IFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xyXG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcclxuICAgICAgICAgICAgbGV0IHByb3AgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcclxuICAgICAgICAgICAgbGV0IGN1ciA9IEpTT04uc3RyaW5naWZ5KHByb3AuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgbGV0IHByZXYgPSBKU09OLnN0cmluZ2lmeShwcm9wLnByZXZpb3VzVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb3BOYW1lID09IFwiY2xpZW50ZU5vXCIgJiYgdGhpcy5jbGllbnRlTm8gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudGlTZXJ2aWNlLmxvY2F6aW9uaSh0aGlzLmNsaWVudGVObylcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkxvY2F6aW9uaSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoZXJyKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgYWxlcnQoXCJmYXR0b1wiKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2VsZXppb25hTG9jYXppb25lKCRldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlemlvbmVMb2NhemlvbmUuZW1pdCh0aGlzLmNsaWVudGVObyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9QbGFjZWhvbGRlcnMgZm9yIHRoZSBjYWxsYmFja3NcclxuICAgIHByaXZhdGUgX29uVG91Y2hlZENhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcclxuXHJcbiAgICBwcml2YXRlIF9vbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gbm9vcDtcclxuXHJcbiAgICAvL2dldCBhY2Nlc3NvclxyXG4gICAgZ2V0IHZhbHVlKCk6IGFueSB7IHJldHVybiB0aGlzLmNsaWVudGVObzsgfTtcclxuXHJcbiAgICAvL3NldCBhY2Nlc3NvciBpbmNsdWRpbmcgY2FsbCB0aGUgb25jaGFuZ2UgY2FsbGJhY2tcclxuICAgIHNldCB2YWx1ZSh2OiBhbnkpIHtcclxuICAgICAgICBpZiAodiAhPT0gdGhpcy5sb2NhemlvbmVObykge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2F6aW9uZU5vID0gdjtcclxuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9TZXQgdG91Y2hlZCBvbiBibHVyXHJcbiAgICBvblRvdWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmxvY2F6aW9uZU5vID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xyXG4gICAgfVxyXG59Il19