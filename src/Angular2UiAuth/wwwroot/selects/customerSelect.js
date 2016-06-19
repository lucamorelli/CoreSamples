System.register(['@angular/core', "@angular/common", '../services/clienti_service'], function(exports_1, context_1) {
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
    var core_1, core_2, common_1, clienti_service_1;
    var noop, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, customerSelect;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (clienti_service_1_1) {
                clienti_service_1 = clienti_service_1_1;
            }],
        execute: function() {
            noop = function () { };
            CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, {
                useExisting: core_1.forwardRef(function () { return customerSelect; }),
                multi: true
            });
            // http://almerosteyn.com/2016/04/linkup-custom-control-to-ngcontrol-ngmodel
            customerSelect = (function () {
                function customerSelect(clientiService) {
                    this.clientiService = clientiService;
                    this.selezioneCliente = new core_2.EventEmitter();
                    //Placeholders for the callbacks
                    this._onTouchedCallback = noop;
                    this._onChangeCallback = noop;
                }
                customerSelect.prototype.ngOnInit = function () {
                    var _this = this;
                    this.clientiService.lista()
                        .subscribe(function (data) {
                        _this.Clienti = data;
                    }, function (err) {
                        alert(err);
                    }, function () {
                        //                alert("fatto");
                    });
                };
                customerSelect.prototype.selezionaCliente = function ($event) {
                    this.selezioneCliente.emit(this.clienteNo);
                };
                Object.defineProperty(customerSelect.prototype, "value", {
                    //get accessor
                    get: function () { return this.clienteNo; },
                    //set accessor including call the onchange callback
                    set: function (v) {
                        if (v !== this.clienteNo) {
                            this.clienteNo = v;
                            this._onChangeCallback(v);
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                //Set touched on blur
                //onTouched() {
                //    this._onTouchedCallback(undefined);
                //}
                //From ControlValueAccessor interface
                customerSelect.prototype.writeValue = function (value) {
                    this.clienteNo = value;
                };
                //From ControlValueAccessor interface
                customerSelect.prototype.registerOnChange = function (fn) {
                    this._onChangeCallback = fn;
                };
                //From ControlValueAccessor interface
                customerSelect.prototype.registerOnTouched = function (fn) {
                    this._onTouchedCallback = fn;
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', core_2.EventEmitter)
                ], customerSelect.prototype, "selezioneCliente", void 0);
                customerSelect = __decorate([
                    core_1.Component({
                        selector: 'customer-select',
                        templateUrl: './selects/customerSelect.html',
                        //bindings: [ClientiService],
                        directives: [common_1.CORE_DIRECTIVES],
                        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, clienti_service_1.ClientiService]
                    }), 
                    __metadata('design:paramtypes', [clienti_service_1.ClientiService])
                ], customerSelect);
                return customerSelect;
            }());
            exports_1("customerSelect", customerSelect);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJTZWxlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvc2VsZWN0cy9jdXN0b21lclNlbGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O1FBTU0sSUFBSSxFQUVKLG1DQUFtQzs7Ozs7Ozs7Ozs7Ozs7WUFGbkMsSUFBSSxHQUFHLGNBQVEsQ0FBQyxDQUFDO1lBRWpCLG1DQUFtQyxHQUFHLElBQUksZUFBUSxDQUNwRCwwQkFBaUIsRUFBRTtnQkFDZixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsY0FBYyxFQUFkLENBQWMsQ0FBQztnQkFDN0MsS0FBSyxFQUFFLElBQUk7YUFDZCxDQUFDLENBQUM7WUFFUCw0RUFBNEU7WUFRNUU7Z0JBUUksd0JBQW1CLGNBQThCO29CQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7b0JBRjFDLHFCQUFnQixHQUF5QixJQUFJLG1CQUFZLEVBQUUsQ0FBQztvQkFxQm5FLGdDQUFnQztvQkFDeEIsdUJBQWtCLEdBQXFCLElBQUksQ0FBQztvQkFFNUMsc0JBQWlCLEdBQXFCLElBQUksQ0FBQztnQkFwQm5ELENBQUM7Z0JBRU0saUNBQVEsR0FBZjtvQkFBQSxpQkFTQztvQkFSRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTt5QkFDdEIsU0FBUyxDQUFDLFVBQUEsSUFBSTt3QkFDWCxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDeEIsQ0FBQyxFQUFFLFVBQUEsR0FBRzt3QkFDRixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ2QsQ0FBQyxFQUFFO3dCQUNDLGlDQUFpQztvQkFDckMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQztnQkFFTSx5Q0FBZ0IsR0FBdkIsVUFBd0IsTUFBVztvQkFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9DLENBQUM7Z0JBUUQsc0JBQUksaUNBQUs7b0JBRFQsY0FBYzt5QkFDZCxjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBRTNDLG1EQUFtRDt5QkFDbkQsVUFBVSxDQUFNO3dCQUNaLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7NEJBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUIsQ0FBQztvQkFDTCxDQUFDOzs7bUJBUjBDOztnQkFVM0MscUJBQXFCO2dCQUNyQixlQUFlO2dCQUNmLHlDQUF5QztnQkFDekMsR0FBRztnQkFFSCxxQ0FBcUM7Z0JBQ3JDLG1DQUFVLEdBQVYsVUFBVyxLQUFVO29CQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCxxQ0FBcUM7Z0JBQ3JDLHlDQUFnQixHQUFoQixVQUFpQixFQUFPO29CQUNwQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2dCQUVELHFDQUFxQztnQkFDckMsMENBQWlCLEdBQWpCLFVBQWtCLEVBQU87b0JBQ3JCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBeEREO29CQUFDLGFBQU0sRUFBRTs7d0VBQUE7Z0JBWmI7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixXQUFXLEVBQUUsK0JBQStCO3dCQUM1Qyw2QkFBNkI7d0JBQzdCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLENBQUM7d0JBQzdCLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxFQUFFLGdDQUFjLENBQUM7cUJBQ25FLENBQUM7O2tDQUFBO2dCQStERixxQkFBQztZQUFELENBQUMsQUE5REQsSUE4REM7WUE5REQsMkNBOERDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgUHJvdmlkZXIsIGZvcndhcmRSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge091dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgQ09SRV9ESVJFQ1RJVkVTfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQge0NsaWVudGlTZXJ2aWNlLCBDbGllbnRlfSBmcm9tICcuLi9zZXJ2aWNlcy9jbGllbnRpX3NlcnZpY2UnO1xyXG5cclxuY29uc3Qgbm9vcCA9ICgpID0+IHsgfTtcclxuXHJcbmNvbnN0IENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SID0gbmV3IFByb3ZpZGVyKFxyXG4gICAgTkdfVkFMVUVfQUNDRVNTT1IsIHtcclxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBjdXN0b21lclNlbGVjdCksXHJcbiAgICAgICAgbXVsdGk6IHRydWVcclxuICAgIH0pO1xyXG5cclxuLy8gaHR0cDovL2FsbWVyb3N0ZXluLmNvbS8yMDE2LzA0L2xpbmt1cC1jdXN0b20tY29udHJvbC10by1uZ2NvbnRyb2wtbmdtb2RlbFxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnY3VzdG9tZXItc2VsZWN0JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9zZWxlY3RzL2N1c3RvbWVyU2VsZWN0Lmh0bWwnLFxyXG4gICAgLy9iaW5kaW5nczogW0NsaWVudGlTZXJ2aWNlXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtDT1JFX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsIENsaWVudGlTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgY3VzdG9tZXJTZWxlY3QgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAgIHB1YmxpYyBDbGllbnRpOiBDbGllbnRlW107XHJcblxyXG4gICAgcHVibGljIGNsaWVudGVObzogbnVtYmVyO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIHNlbGV6aW9uZUNsaWVudGU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjbGllbnRpU2VydmljZTogQ2xpZW50aVNlcnZpY2UpIHsgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNsaWVudGlTZXJ2aWNlLmxpc3RhKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ2xpZW50aSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGFsZXJ0KFwiZmF0dG9cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlemlvbmFDbGllbnRlKCRldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZWxlemlvbmVDbGllbnRlLmVtaXQodGhpcy5jbGllbnRlTm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vUGxhY2Vob2xkZXJzIGZvciB0aGUgY2FsbGJhY2tzXHJcbiAgICBwcml2YXRlIF9vblRvdWNoZWRDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25DaGFuZ2VDYWxsYmFjazogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XHJcblxyXG4gICAgLy9nZXQgYWNjZXNzb3JcclxuICAgIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy5jbGllbnRlTm87IH07XHJcblxyXG4gICAgLy9zZXQgYWNjZXNzb3IgaW5jbHVkaW5nIGNhbGwgdGhlIG9uY2hhbmdlIGNhbGxiYWNrXHJcbiAgICBzZXQgdmFsdWUodjogYW55KSB7XHJcbiAgICAgICAgaWYgKHYgIT09IHRoaXMuY2xpZW50ZU5vKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpZW50ZU5vID0gdjtcclxuICAgICAgICAgICAgdGhpcy5fb25DaGFuZ2VDYWxsYmFjayh2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9TZXQgdG91Y2hlZCBvbiBibHVyXHJcbiAgICAvL29uVG91Y2hlZCgpIHtcclxuICAgIC8vICAgIHRoaXMuX29uVG91Y2hlZENhbGxiYWNrKHVuZGVmaW5lZCk7XHJcbiAgICAvL31cclxuXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNsaWVudGVObyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRnJvbSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSkge1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICAvL0Zyb20gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkQ2FsbGJhY2sgPSBmbjtcclxuICAgIH1cclxufSJdfQ==