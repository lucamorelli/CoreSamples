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
                        bindings: [fatture_service_1.FattureService, progetti_service_1.ProgettiService, pagamenti_service_1.PagamentiService],
                        providers: [http_1.HTTP_PROVIDERS, common_1.FORM_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [fatture_service_1.FattureService, progetti_service_1.ProgettiService, pagamenti_service_1.PagamentiService, common_1.FormBuilder])
                ], InsAttivitaCmp);
                return InsAttivitaCmp;
            }());
            exports_1("InsAttivitaCmp", InsAttivitaCmp);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zQXR0aXZpdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvdmlld3MvaW5zQXR0aXZpdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBd0JJLHdCQUFtQixjQUE4QixFQUFTLGVBQWdDLEVBQy9FLGdCQUFrQyxFQUNqQyxFQUFlO29CQUZSLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtvQkFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7b0JBQy9FLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7b0JBQ2pDLE9BQUUsR0FBRixFQUFFLENBQWE7Z0JBRzNCLENBQUM7Z0JBRU0saUNBQVEsR0FBZjtvQkFBQSxpQkE2QkM7b0JBNUJHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQzVCLE9BQU8sRUFBRSxDQUFDLFNBQVMsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDekMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN0QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ25DLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDL0IsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUM5QixZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDcEMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUN0QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3BDLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQzt3QkFDdEMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsUUFBUSxDQUFDO3dCQUMvQixPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xDLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRTt3QkFDZCxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7d0JBQ2YsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO3FCQUNuQixDQUFDLENBQUE7b0JBR0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUU7eUJBQzNCLFNBQVMsQ0FBQyxVQUFBLElBQUk7d0JBQ1gsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3hCLENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNkLENBQUMsRUFBRTt3QkFDQyxpQ0FBaUM7b0JBQ3JDLENBQUMsQ0FDQSxDQUFDO2dCQUNWLENBQUM7Z0JBRU0seUNBQWdCLEdBQXZCLFVBQXdCLFNBQWlCO29CQUF6QyxpQkFxQkM7b0JBcEJHLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO29CQUUzQixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3lCQUM3QyxTQUFTLENBQUMsVUFBQyxJQUFnQjt3QkFDeEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3pCLENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNkLENBQUMsRUFBRTt3QkFDZixpQ0FBaUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO29CQUVQLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO3lCQUNqRCxTQUFTLENBQUMsVUFBQyxJQUFpQjt3QkFDekIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7b0JBQzFCLENBQUMsRUFBRSxVQUFBLEdBQUc7d0JBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNkLENBQUMsRUFBRTt3QkFDZixpQ0FBaUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO2dCQUVYLENBQUM7Z0JBRU0saUNBQVEsR0FBZjtvQkFDSiwrQ0FBK0M7b0JBQ3ZDLHVDQUF1QztnQkFDM0MsQ0FBQztnQkFFTSw4Q0FBcUIsR0FBNUIsVUFBNkIsY0FBc0I7Z0JBQ25ELENBQUM7Z0JBRU0sMENBQWlCLEdBQXhCLFVBQXlCLFVBQWtCO2dCQUMzQyxDQUFDO2dCQUVNLDJDQUFrQixHQUF6QixVQUEwQixXQUFtQjtnQkFDN0MsQ0FBQztnQkF4R0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxVQUFVLEVBQUUsQ0FBQyx3QkFBYyxFQUFFLDRCQUFrQixFQUFFLDZCQUFtQixFQUFFLGdDQUFzQixDQUFDO3dCQUM3RixRQUFRLEVBQUUsVUFBVTt3QkFDcEIsV0FBVyxFQUFFLDJCQUEyQjt3QkFDeEMsUUFBUSxFQUFFLENBQUMsZ0NBQWMsRUFBRSxrQ0FBZSxFQUFFLG9DQUFnQixDQUFDO3dCQUM3RCxTQUFTLEVBQUUsQ0FBQyxxQkFBYyxFQUFFLHVCQUFjLENBQUM7cUJBQzlDLENBQUM7O2tDQUFBO2dCQW1HRixxQkFBQztZQUFELENBQUMsQUFsR0QsSUFrR0M7WUFsR0QsMkNBa0dDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7SFRUUF9QUk9WSURFUlN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBDb250cm9sLCBWYWxpZGF0b3JzLCBGT1JNX1BST1ZJREVSUywgQ29udHJvbEdyb3VwfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge09uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge0ZhdHR1cmVTZXJ2aWNlLCBGYXR0dXJhfSBmcm9tICcuLi9zZXJ2aWNlcy9mYXR0dXJlX3NlcnZpY2UnO1xyXG5pbXBvcnQge1Byb2dldHRpU2VydmljZSwgUHJvZ2V0dG99IGZyb20gJy4uL3NlcnZpY2VzL3Byb2dldHRpX3NlcnZpY2UnO1xyXG5pbXBvcnQge1BhZ2FtZW50aVNlcnZpY2UsIFBhZ2FtZW50b30gZnJvbSAnLi4vc2VydmljZXMvcGFnYW1lbnRpX3NlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtjdXN0b21lclNlbGVjdCwgYWN0aXZpdHlUeXBlU2VsZWN0LCBjdXN0b21lck9yZGVyU2VsZWN0LCBjdXN0b21lckxvY2F0aW9uU2VsZWN0fSBmcm9tICcuLi9zZWxlY3RzJztcclxuXHJcbmltcG9ydCB7ZmllbGRDb25maWd1cmF0aW9ufSBmcm9tICcuLi9oZWxwZXJzL2ZpZWxkQ29uZmlndXJhdGlvbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIGRpcmVjdGl2ZXM6IFtjdXN0b21lclNlbGVjdCwgYWN0aXZpdHlUeXBlU2VsZWN0LCBjdXN0b21lck9yZGVyU2VsZWN0LCBjdXN0b21lckxvY2F0aW9uU2VsZWN0XSxcclxuICAgIHNlbGVjdG9yOiAnYXR0aXZpdGEnLCAgXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4uL3ZpZXdzL2luc0F0dGl2aXRhLmh0bWwnLFxyXG4gICAgYmluZGluZ3M6IFtGYXR0dXJlU2VydmljZSwgUHJvZ2V0dGlTZXJ2aWNlLCBQYWdhbWVudGlTZXJ2aWNlXSxcclxuICAgIHByb3ZpZGVyczogW0hUVFBfUFJPVklERVJTLCBGT1JNX1BST1ZJREVSU10gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbnNBdHRpdml0YUNtcCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwdWJsaWMgRmF0dHVyZTogRmF0dHVyYVtdO1xyXG4gICAgcHVibGljIFByb2dldHRpOiBQcm9nZXR0b1tdO1xyXG4gICAgcHVibGljIFBhZ2FtZW50aTogUGFnYW1lbnRvW107XHJcblxyXG4gICAgcHVibGljIGRlc2NyaXppb25lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY2xpZW50ZU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29tbWVzc2FObzogbnVtYmVyO1xyXG4gICAgcHVibGljIGxvY2F6aW9uZU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgZGF0YTogRGF0ZTtcclxuICAgIHB1YmxpYyBudW1PcmU6IG51bWJlcjtcclxuICAgIHB1YmxpYyBkYUZhdHR1cmFyZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmYXR0dXJhdG86IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbm9uUHJldmlzdG86IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbm90ZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHRpcG9BdHRpdml0YU5vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdXJnZW50ZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBmYXR0dXJhTm86IG51bWJlcjtcclxuICAgIHB1YmxpYyBwcm9nZXR0b05vOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcGFnYW1lbnRvTm86IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGZvcm1Db25maWc6IENvbnRyb2xHcm91cDtcclxuICAgIHByaXZhdGUgY2xpZW50ZUNvbmZpZ3VyYXRpb246IGZpZWxkQ29uZmlndXJhdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmF0dHVyZVNlcnZpY2U6IEZhdHR1cmVTZXJ2aWNlLCBwdWJsaWMgcHJvZ2V0dGlTZXJ2aWNlOiBQcm9nZXR0aVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHBhZ2FtZW50aVNlcnZpY2U6IFBhZ2FtZW50aVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIpIHtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmZvcm1Db25maWcgPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgY2xpZW50ZTogW3VuZGVmaW5lZCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGRlc2NyaXppb25lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBjb21tZXNzYTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZGF0YTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgb3JlOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICB0aXBvQXR0aXZpdGE6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGxvY2F6aW9uZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZGFGYXR0dXJhcmU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGZhdHR1cmF0bzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbm9uUHJldmlzdG86IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIG5vdGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIHVyZ2VudGU6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXHJcbiAgICAgICAgICAgIGZhdHR1cmE6IFsnJyxdLFxyXG4gICAgICAgICAgICBwcm9nZXR0bzogWycnLF0sXHJcbiAgICAgICAgICAgIHBhZ2FtZW50bzogWycnLF1cclxuICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5mYXR0dXJlU2VydmljZS51bHRpbW9Bbm5vKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuRmF0dHVyZSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIGFsZXJ0KFwiZmF0dG9cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZXppb25hQ2xpZW50ZShjbGllbnRlTm86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xpZW50ZU5vID0gY2xpZW50ZU5vO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dldHRpU2VydmljZS5hdHRpdmlDbGllbnRlKHRoaXMuY2xpZW50ZU5vKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiBQcm9nZXR0b1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlByb2dldHRpID0gZGF0YTtcclxuICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGVycilcclxuICAgICAgICAgICAgfSwgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICBhbGVydChcImZhdHRvXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdhbWVudGlTZXJ2aWNlLnBhZ2FtZW50aUNsaWVudGUodGhpcy5jbGllbnRlTm8pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IFBhZ2FtZW50b1tdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlBhZ2FtZW50aSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpXHJcbiAgICAgICAgICAgIH0sICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgYWxlcnQoXCJmYXR0b1wiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RyYSgpOiB2b2lkIHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybUNvbmZpZy5jbGllbnRlKTtcclxuICAgICAgICAvL2FsZXJ0KHRoaXMuZm9ybUNvbmZpZy5jbGllbnRlLnZhbGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZXppb25hVGlwb0F0dGl2aXRhKHRpcG9BdHRpdml0YU5vOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZXppb25hQ29tbWVzc2EoY29tbWVzc2FObzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGV6aW9uYUxvY2F6aW9uZShsb2NhemlvbmVObzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB9XHJcbn0iXX0=