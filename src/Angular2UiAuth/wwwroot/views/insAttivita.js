System.register(['@angular/core', '@angular/http', '@angular/common', '../services/fatture_service', '../services/progetti_service', '../services/pagamenti_service', '../selects'], function(exports_1, context_1) {
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
    var core_1, http_1, common_1, fatture_service_1, progetti_service_1, pagamenti_service_1, selects_1;
    var InsAttivitaCmp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (fatture_service_1_1) {
                fatture_service_1 = fatture_service_1_1;
            },
            function (progetti_service_1_1) {
                progetti_service_1 = progetti_service_1_1;
            },
            function (pagamenti_service_1_1) {
                pagamenti_service_1 = pagamenti_service_1_1;
            },
            function (selects_1_1) {
                selects_1 = selects_1_1;
            }],
        execute: function() {
            InsAttivitaCmp = (function () {
                function InsAttivitaCmp(fattureService, progettiService, pagamentiService, fb) {
                    this.fattureService = fattureService;
                    this.progettiService = progettiService;
                    this.pagamentiService = pagamentiService;
                    this.fb = fb;
                }
                InsAttivitaCmp.prototype.ngOnInit = function () {
                    var _this = this;
                    this.formConfig = this.fb.group({
                        cliente: [undefined, common_1.Validators.required],
                        descrizione: ['', common_1.Validators.required],
                        commessa: ['', common_1.Validators.required],
                        data: ['', common_1.Validators.required],
                        ore: ['', common_1.Validators.required],
                        tipoAttivita: ['', common_1.Validators.required],
                        locazione: ['', common_1.Validators.required],
                        daFatturare: ['', common_1.Validators.required],
                        fatturato: ['', common_1.Validators.required],
                        nonPrevisto: ['', common_1.Validators.required],
                        note: ['', common_1.Validators.required],
                        urgente: ['', common_1.Validators.required],
                        fattura: ['',],
                        progetto: ['',],
                        pagamento: ['',]
                    });
                    this.fattureService.ultimoAnno()
                        .subscribe(function (data) {
                        _this.Fatture = data;
                    }, function (err) {
                        alert(err);
                    }, function () {
                        //                alert("fatto");
                    });
                };
                InsAttivitaCmp.prototype.selezionaCliente = function (clienteNo) {
                    var _this = this;
                    this.clienteNo = clienteNo;
                    this.progettiService.attiviCliente(this.clienteNo)
                        .subscribe(function (data) {
                        _this.Progetti = data;
                    }, function (err) {
                        alert(err);
                    }, function () {
                        //                alert("fatto");
                    });
                    this.pagamentiService.pagamentiCliente(this.clienteNo)
                        .subscribe(function (data) {
                        _this.Pagamenti = data;
                    }, function (err) {
                        alert(err);
                    }, function () {
                        //                alert("fatto");
                    });
                };
                InsAttivitaCmp.prototype.registra = function () {
                    //        console.log(this.formConfig.cliente);
                    //alert(this.formConfig.cliente.valid);
                };
                InsAttivitaCmp.prototype.selezionaTipoAttivita = function (tipoAttivitaNo) {
                };
                InsAttivitaCmp.prototype.selezionaCommessa = function (commessaNo) {
                };
                InsAttivitaCmp.prototype.selezionaLocazione = function (locazioneNo) {
                };
                InsAttivitaCmp = __decorate([
                    core_1.Component({
                        directives: [selects_1.customerSelect, selects_1.activityTypeSelect, selects_1.customerOrderSelect, selects_1.customerLocationSelect],
                        selector: 'attivita',
                        templateUrl: '../views/insAttivita.html',
                        providers: [http_1.HTTP_PROVIDERS, common_1.FORM_PROVIDERS, fatture_service_1.FattureService, progetti_service_1.ProgettiService, pagamenti_service_1.PagamentiService]
                    }), 
                    __metadata('design:paramtypes', [fatture_service_1.FattureService, progetti_service_1.ProgettiService, pagamenti_service_1.PagamentiService, common_1.FormBuilder])
                ], InsAttivitaCmp);
                return InsAttivitaCmp;
            }());
            exports_1("InsAttivitaCmp", InsAttivitaCmp);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zQXR0aXZpdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvdmlld3MvaW5zQXR0aXZpdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtQkE7Z0JBd0JJLHdCQUFtQixjQUE4QixFQUFTLGVBQWdDLEVBQy9FLGdCQUFrQyxFQUNqQyxFQUFlO29CQUZSLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQy9FLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQ2pDLE9BQUUsR0FBRixFQUFFLENBQWE7Z0JBRzNCLENBQUM7Z0JBRU0saUNBQVEsR0FBZjtvQkFBQSxpQkE2QkM7b0JBNUJHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDekMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ25DLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDL0IsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUM5QixZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDdEMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUMvQixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO3FCQUNuQixDQUFDLENBQUE7b0JBR0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7eUJBQzNCLFNBQVMsQ0FBQyxVQUFBLElBQUk7d0JBQ1gsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3hCLENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNkLENBQUMsRUFBRTt3QkFDQyxpQ0FBaUM7b0JBQ3JDLENBQUMsQ0FDQSxDQUFDO2dCQUNWLENBQUM7Z0JBRU0seUNBQWdCLEdBQXZCLFVBQXdCLFNBQWlCO29CQUF6QyxpQkFxQkM7b0JBcEJHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUUzQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3lCQUM3QyxTQUFTLENBQUMsVUFBQyxJQUFnQjt3QkFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNkLENBQUMsRUFBRTt3QkFDZixpQ0FBaUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO29CQUVQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQyxJQUFpQjt3QkFDekIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNkLENBQUMsRUFBRTt3QkFDZixpQ0FBaUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO2dCQUVYLENBQUM7Z0JBRU0saUNBQVEsR0FBZjtvQkFDSiwrQ0FBK0M7b0JBQ3ZDLHVDQUF1QztnQkFDM0MsQ0FBQztnQkFFTSw4Q0FBcUIsR0FBNUIsVUFBNkIsY0FBc0I7Z0JBQ25ELENBQUM7Z0JBRU0sMENBQWlCLEdBQXhCLFVBQXlCLFVBQWtCO2dCQUMzQyxDQUFDO2dCQUVNLDJDQUFrQixHQUF6QixVQUEwQixXQUFtQjtnQkFDN0MsQ0FBQztnQkF2R0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyx3QkFBYyxFQUFFLDRCQUFrQixFQUFFLDZCQUFtQixFQUFFLGdDQUFzQixDQUFDO3dCQUM3RixRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLDJCQUEyQjt3QkFDeEMsU0FBUyxFQUFFLENBQUMscUJBQWMsRUFBRSx1QkFBYyxFQUFFLGdDQUFjLEVBQUUsa0NBQWUsRUFBRSxvQ0FBZ0IsQ0FBQztxQkFDakcsQ0FBQzs7a0NBQUE7Z0JBbUdGLHFCQUFDO1lBQUQsQ0FBQyxBQWxHRCxJQWtHQztZQWxHRCwyQ0FrR0MsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIVFRQX1BST1ZJREVSU30gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIENvbnRyb2wsIFZhbGlkYXRvcnMsIEZPUk1fUFJPVklERVJTLCBDb250cm9sR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7T25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7RmF0dHVyZVNlcnZpY2UsIEZhdHR1cmF9IGZyb20gJy4uL3NlcnZpY2VzL2ZhdHR1cmVfc2VydmljZSc7XHJcbmltcG9ydCB7UHJvZ2V0dGlTZXJ2aWNlLCBQcm9nZXR0b30gZnJvbSAnLi4vc2VydmljZXMvcHJvZ2V0dGlfc2VydmljZSc7XHJcbmltcG9ydCB7UGFnYW1lbnRpU2VydmljZSwgUGFnYW1lbnRvfSBmcm9tICcuLi9zZXJ2aWNlcy9wYWdhbWVudGlfc2VydmljZSc7XHJcblxyXG5pbXBvcnQge2N1c3RvbWVyU2VsZWN0LCBhY3Rpdml0eVR5cGVTZWxlY3QsIGN1c3RvbWVyT3JkZXJTZWxlY3QsIGN1c3RvbWVyTG9jYXRpb25TZWxlY3R9IGZyb20gJy4uL3NlbGVjdHMnO1xyXG5cclxuaW1wb3J0IHtmaWVsZENvbmZpZ3VyYXRpb259IGZyb20gJy4uL2hlbHBlcnMvZmllbGRDb25maWd1cmF0aW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZGlyZWN0aXZlczogW2N1c3RvbWVyU2VsZWN0LCBhY3Rpdml0eVR5cGVTZWxlY3QsIGN1c3RvbWVyT3JkZXJTZWxlY3QsIGN1c3RvbWVyTG9jYXRpb25TZWxlY3RdLFxyXG4gICAgc2VsZWN0b3I6ICdhdHRpdml0YScsICBcclxuICAgIHRlbXBsYXRlVXJsOiAnLi4vdmlld3MvaW5zQXR0aXZpdGEuaHRtbCcsXHJcbiAgICBwcm92aWRlcnM6IFtIVFRQX1BST1ZJREVSUywgRk9STV9QUk9WSURFUlMsIEZhdHR1cmVTZXJ2aWNlLCBQcm9nZXR0aVNlcnZpY2UsIFBhZ2FtZW50aVNlcnZpY2VdIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5zQXR0aXZpdGFDbXAgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgcHVibGljIEZhdHR1cmU6IEZhdHR1cmFbXTtcclxuICAgIHB1YmxpYyBQcm9nZXR0aTogUHJvZ2V0dG9bXTtcclxuICAgIHB1YmxpYyBQYWdhbWVudGk6IFBhZ2FtZW50b1tdO1xyXG5cclxuICAgIHB1YmxpYyBkZXNjcml6aW9uZTogc3RyaW5nO1xyXG4gICAgcHVibGljIGNsaWVudGVObzogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbW1lc3NhTm86IG51bWJlcjtcclxuICAgIHB1YmxpYyBsb2NhemlvbmVObzogbnVtYmVyO1xyXG4gICAgcHVibGljIGRhdGE6IERhdGU7XHJcbiAgICBwdWJsaWMgbnVtT3JlOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZGFGYXR0dXJhcmU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZmF0dHVyYXRvOiBib29sZWFuO1xyXG4gICAgcHVibGljIG5vblByZXZpc3RvOiBib29sZWFuO1xyXG4gICAgcHVibGljIG5vdGU6IHN0cmluZztcclxuICAgIHB1YmxpYyB0aXBvQXR0aXZpdGFObzogbnVtYmVyO1xyXG4gICAgcHVibGljIHVyZ2VudGU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgZmF0dHVyYU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcHJvZ2V0dG9ObzogbnVtYmVyO1xyXG4gICAgcHVibGljIHBhZ2FtZW50b05vOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JtQ29uZmlnOiBDb250cm9sR3JvdXA7XHJcbiAgICBwcml2YXRlIGNsaWVudGVDb25maWd1cmF0aW9uOiBmaWVsZENvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGZhdHR1cmVTZXJ2aWNlOiBGYXR0dXJlU2VydmljZSwgcHVibGljIHByb2dldHRpU2VydmljZTogUHJvZ2V0dGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBwYWdhbWVudGlTZXJ2aWNlOiBQYWdhbWVudGlTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JtQ29uZmlnID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGNsaWVudGU6IFt1bmRlZmluZWQsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBkZXNjcml6aW9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgY29tbWVzc2E6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGRhdGE6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIG9yZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgdGlwb0F0dGl2aXRhOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBsb2NhemlvbmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGRhRmF0dHVyYXJlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBmYXR0dXJhdG86IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIG5vblByZXZpc3RvOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBub3RlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICB1cmdlbnRlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBmYXR0dXJhOiBbJycsXSxcclxuICAgICAgICAgICAgcHJvZ2V0dG86IFsnJyxdLFxyXG4gICAgICAgICAgICBwYWdhbWVudG86IFsnJyxdXHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZmF0dHVyZVNlcnZpY2UudWx0aW1vQW5ubygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkZhdHR1cmUgPSBkYXRhO1xyXG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKVxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICBhbGVydChcImZhdHRvXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGV6aW9uYUNsaWVudGUoY2xpZW50ZU5vOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsaWVudGVObyA9IGNsaWVudGVObztcclxuXHJcbiAgICAgICAgdGhpcy5wcm9nZXR0aVNlcnZpY2UuYXR0aXZpQ2xpZW50ZSh0aGlzLmNsaWVudGVObylcclxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZGF0YTogUHJvZ2V0dG9bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Qcm9nZXR0aSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgYWxlcnQoXCJmYXR0b1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGFnYW1lbnRpU2VydmljZS5wYWdhbWVudGlDbGllbnRlKHRoaXMuY2xpZW50ZU5vKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBQYWdhbWVudG9bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QYWdhbWVudGkgPSBkYXRhO1xyXG4gICAgICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyKVxyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgIGFsZXJ0KFwiZmF0dG9cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0cmEoKTogdm9pZCB7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1Db25maWcuY2xpZW50ZSk7XHJcbiAgICAgICAgLy9hbGVydCh0aGlzLmZvcm1Db25maWcuY2xpZW50ZS52YWxpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGV6aW9uYVRpcG9BdHRpdml0YSh0aXBvQXR0aXZpdGFObzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGV6aW9uYUNvbW1lc3NhKGNvbW1lc3NhTm86IG51bWJlcik6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxlemlvbmFMb2NhemlvbmUobG9jYXppb25lTm86IG51bWJlcik6IHZvaWQge1xyXG4gICAgfVxyXG59Il19