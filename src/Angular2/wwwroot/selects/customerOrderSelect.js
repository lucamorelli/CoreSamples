System.register(['@angular/core', "@angular/common", '../services/commesse_service'], function(exports_1, context_1) {
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
    var core_1, core_2, common_1, commesse_service_1;
    var noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, customerOrderSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (commesse_service_1_1) {
                commesse_service_1 = commesse_service_1_1;
            }],
        execute: function() {
            noop = function () { };
            CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return customerOrderSelect; }),
                multi: true
            });
            // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
            customerOrderSelect = (function () {
                function customerOrderSelect(commesseService) {
                    this.commesseService = commesseService;
                    this.selezioneCommessa = new core_2.EventEmitter();
                    //Placeholders for the callbacks
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                }
                customerOrderSelect.prototype.ngOnInit = function () {
                };
                customerOrderSelect.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    for (var propName in changes) {
                        var prop = changes[propName];
                        var cur = JSON.stringify(prop.currentValue);
                        var prev = JSON.stringify(prop.previousValue);
                        if (propName == "clienteNo" && this.clienteNo != undefined) {
                            this.commesseService.commesseCliente(this.clienteNo)
                                .subscribe(function (data) {
                                _this.Commesse = data;
                            }, function (err) {
                                alert(err);
                            }, function () {
                                //                alert("fatto");
                            });
                        }
                    }
                };
                customerOrderSelect.prototype.selezionaCommessa = function ($event) {
                    this.selezioneCommessa.emit(this.clienteNo);
                };
                Object.defineProperty(customerOrderSelect.prototype, "value", {
                    //get accessor
                    get: function () { return this.clienteNo; },
                    //set accessor including call the onchange callback
                    set: function (v) {
                        if (v !== this.commessaNo) {
                            this.commessaNo = v;
                            this._onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                //Set touched on blur
                customerOrderSelect.prototype.onTouched = function () {
                    this._onTouchedCallback(undefined);
                };
                //From ControlValueAccessor interface
                customerOrderSelect.prototype.writeValue = function (value) {
                    this.commessaNo = value;
                };
                //From ControlValueAccessor interface
                customerOrderSelect.prototype.registerOnChange = function (fn) {
                    this._onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                customerOrderSelect.prototype.registerOnTouched = function (fn) {
                    this._onTouchedCallback = fn;
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Number)
                ], customerOrderSelect.prototype, "clienteNo", void 0);
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_2.EventEmitter)
                ], customerOrderSelect.prototype, "selezioneCommessa", void 0);
                customerOrderSelect = __decorate([
                    core_1.Component({
                        selector: 'customer-order-select',
                        templateUrl: './selects/customerOrderSelect.html',
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, commesse_service_1.CommesseService]
                    }), 
                    __metadata('design:paramtypes', [commesse_service_1.CommesseService])
                ], customerOrderSelect);
                return customerOrderSelect;
            }());
            exports_1("customerOrderSelect", customerOrderSelect);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJPcmRlclNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC9zZWxlY3RzL2N1c3RvbWVyT3JkZXJTZWxlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQU1NLElBQUksRUFFSixtQ0FBbUM7Ozs7Ozs7Ozs7Ozs7O1lBRm5DLElBQUksR0FBRyxjQUFRLENBQUMsQ0FBQztZQUVqQixtQ0FBbUMsR0FBRyxJQUFJLGVBQVEsQ0FDcEQsMEJBQWlCLEVBQUU7Z0JBQ2YsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO2dCQUNsRCxLQUFLLEVBQUUsSUFBSTthQUNkLENBQUMsQ0FBQztZQUVQLDRFQUE0RTtZQU81RTtnQkFXSSw2QkFBbUIsZUFBZ0M7b0JBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFGNUMsc0JBQWlCLEdBQXlCLElBQUksbUJBQVksRUFBRSxDQUFDO29CQW1DcEUsZ0NBQWdDO29CQUN4Qix1QkFBa0IsR0FBcUIsSUFBSSxDQUFDO29CQUU1QyxzQkFBaUIsR0FBcUIsSUFBSSxDQUFDO2dCQWxDbkQsQ0FBQztnQkFFTSxzQ0FBUSxHQUFmO2dCQUNBLENBQUM7Z0JBRUQseUNBQVcsR0FBWCxVQUFZLE9BQWlEO29CQUE3RCxpQkFrQkM7b0JBakJHLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzVDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO3dCQUU5QyxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQ0FDL0MsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQ0FDWCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs0QkFDekIsQ0FBQyxFQUFFLFVBQUEsR0FBRztnQ0FDRixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ2QsQ0FBQyxFQUFFO2dDQUNDLGlDQUFpQzs0QkFDckMsQ0FBQyxDQUFDLENBQUM7d0JBQ1gsQ0FBQztvQkFFTCxDQUFDO2dCQUNMLENBQUM7Z0JBSU0sK0NBQWlCLEdBQXhCLFVBQXlCLE1BQVc7b0JBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDO2dCQVFELHNCQUFJLHNDQUFLO29CQURULGNBQWM7eUJBQ2QsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUUzQyxtREFBbUQ7eUJBQ25ELFVBQVUsQ0FBTTt3QkFDWixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOzRCQUNwQixJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLENBQUM7b0JBQ0wsQ0FBQzs7O21CQVIwQzs7Z0JBVTNDLHFCQUFxQjtnQkFDckIsdUNBQVMsR0FBVDtvQkFDSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyx3Q0FBVSxHQUFWLFVBQVcsS0FBVTtvQkFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQscUNBQXFDO2dCQUNyQyw4Q0FBZ0IsR0FBaEIsVUFBaUIsRUFBTztvQkFDcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztnQkFDaEMsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLCtDQUFpQixHQUFqQixVQUFrQixFQUFPO29CQUNyQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO2dCQUNqQyxDQUFDO2dCQTNFRDtvQkFBQyxZQUFLLEVBQUU7O3NFQUFBO2dCQUtSO29CQUFDLGFBQU0sRUFBRTs7OEVBQUE7Z0JBZGI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsdUJBQXVCO3dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO3dCQUNqRCxVQUFVLEVBQUUsQ0FBQyx3QkFBZSxDQUFDO3dCQUM3QixTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBRSxrQ0FBZSxDQUFDO3FCQUNwRSxDQUFDOzt1Q0FBQTtnQkFnRkYsMEJBQUM7WUFBRCxDQUFDLEFBL0VELElBK0VDO1lBL0VELHFEQStFQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFByb3ZpZGVyLCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge0NvbW1lc3NlU2VydmljZSwgQ29tbWVzc2F9IGZyb20gJy4uL3NlcnZpY2VzL2NvbW1lc3NlX3NlcnZpY2UnO1xyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcclxuXHJcbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0gbmV3IFByb3ZpZGVyKFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1IsIHtcclxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBjdXN0b21lck9yZGVyU2VsZWN0KSxcclxuICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4vLyBodHRwOi8vYWxtZXJvc3RleW4uY29tLzIwMTYvMDQvbGlua3VwLWN1c3RvbS1jb250cm9sLXRvLW5nY29udHJvbC1uZ21vZGVsXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjdXN0b21lci1vcmRlci1zZWxlY3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdHMvY3VzdG9tZXJPcmRlclNlbGVjdC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsIENvbW1lc3NlU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIGN1c3RvbWVyT3JkZXJTZWxlY3QgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAgIHB1YmxpYyBDb21tZXNzZTogQ29tbWVzc2FbXTtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIGNsaWVudGVObzogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb21tZXNzYU5vOiBudW1iZXI7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgc2VsZXppb25lQ29tbWVzc2E6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb21tZXNzZVNlcnZpY2U6IENvbW1lc3NlU2VydmljZSkgeyBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcclxuICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBwcm9wID0gY2hhbmdlc1twcm9wTmFtZV07XHJcbiAgICAgICAgICAgIGxldCBjdXIgPSBKU09OLnN0cmluZ2lmeShwcm9wLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGxldCBwcmV2ID0gSlNPTi5zdHJpbmdpZnkocHJvcC5wcmV2aW91c1ZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PSBcImNsaWVudGVOb1wiICYmIHRoaXMuY2xpZW50ZU5vICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZXNzZVNlcnZpY2UuY29tbWVzc2VDbGllbnRlKHRoaXMuY2xpZW50ZU5vKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQ29tbWVzc2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGVycilcclxuICAgICAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGFsZXJ0KFwiZmF0dG9cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHNlbGV6aW9uYUNvbW1lc3NhKCRldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlemlvbmVDb21tZXNzYS5lbWl0KHRoaXMuY2xpZW50ZU5vKTtcclxuICAgIH1cclxuXHJcbiAgICAvL1BsYWNlaG9sZGVycyBmb3IgdGhlIGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBfb25Ub3VjaGVkQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICAgIHByaXZhdGUgX29uQ2hhbmdlQ2FsbGJhY2s6IChfOiBhbnkpID0+IHZvaWQgPSBub29wO1xyXG5cclxuICAgIC8vZ2V0IGFjY2Vzc29yXHJcbiAgICBnZXQgdmFsdWUoKTogYW55IHsgcmV0dXJuIHRoaXMuY2xpZW50ZU5vOyB9O1xyXG5cclxuICAgIC8vc2V0IGFjY2Vzc29yIGluY2x1ZGluZyBjYWxsIHRoZSBvbmNoYW5nZSBjYWxsYmFja1xyXG4gICAgc2V0IHZhbHVlKHY6IGFueSkge1xyXG4gICAgICAgIGlmICh2ICE9PSB0aGlzLmNvbW1lc3NhTm8pIHtcclxuICAgICAgICAgICAgdGhpcy5jb21tZXNzYU5vID0gdjtcclxuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9TZXQgdG91Y2hlZCBvbiBibHVyXHJcbiAgICBvblRvdWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sodW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbW1lc3NhTm8gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgLy9Gcm9tIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZVxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrID0gZm47XHJcbiAgICB9XHJcbn0iXX0=