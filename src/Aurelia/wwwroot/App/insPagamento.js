var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'aurelia-dialog', 'pagamenti/Pagamento', 'pagamenti/PagamentoService', 'dialogs/confirmOperation'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, aurelia_dialog_1, Pagamento_1, PagamentoService_1, confirmOperation_1) {
    "use strict";
    var insPagamento = (function () {
        function insPagamento(http, pagamentoService, evtAgg, dialogService) {
            this.http = http;
            this.pagamentoService = pagamentoService;
            this.evtAgg = evtAgg;
            this.dialogService = dialogService;
            this.pagamentoCorrente = new Pagamento_1.Pagamento();
        }
        //public registrazione(): void {
        //	this.pagamentoService.aggiungi(this.pagamentoCorrente).then((value) => {
        //		this.evtAgg.publish('fatturaAdded');
        //	});
        //   }
        insPagamento.prototype.registrazione = function () {
            var _this = this;
            if (this.pagamentoCorrente.DataPagamento == undefined) {
                alert("Inserire la data");
                return;
            }
            if (this.pagamentoCorrente.Importo == undefined || this.pagamentoCorrente.Importo == 0) {
                alert("Inserire l'importo");
                return;
            }
            if (this.pagamentoCorrente.ClienteNo == undefined) {
                alert("Selezionare il cliente");
                return;
            }
            if (this.pagamentoCorrente.Descrizione == undefined || this.pagamentoCorrente.Descrizione == "") {
                alert("inserire la descrizione");
                return;
            }
            if (this.pagamentoCorrente.PagamentoNo == undefined || this.pagamentoCorrente.PagamentoNo == 0) {
                this.pagamentoService.aggiungi(this.pagamentoCorrente)
                    .then(function () {
                    _this.pagamentoCorrente = new Pagamento_1.Pagamento();
                    _this.pagamentoCorrente.DataPagamento = new Date();
                    _this.evtAgg.publish('paymentUpdated');
                });
            }
            else {
                this.pagamentoService.modifica(this.pagamentoCorrente)
                    .then(function () {
                    _this.pagamentoCorrente = new Pagamento_1.Pagamento();
                    _this.pagamentoCorrente.DataPagamento = new Date();
                    _this.evtAgg.publish('paymentUpdated');
                });
            }
            //      this.speseService.aggiungi(this.spesaCorrente).then((value) => {
            //          this.evtAgg.publish('expenseUpdated');
            //});
        };
        insPagamento.prototype.modificaRecord = function ($event) {
            var _this = this;
            var pagamento = $event.detail;
            this.pagamentoCorrente = new Pagamento_1.Pagamento();
            this.pagamentoService.leggi(pagamento.PagamentoNo)
                .then(function (response) {
                _this.pagamentoCorrente = response.content;
            });
        };
        insPagamento.prototype.cancellaRecord = function ($event) {
            var _this = this;
            var pagamento = $event.detail;
            this.dialogService.open({ viewModel: confirmOperation_1.confirmOperation, model: 'confermate la cancellazione del pagamento?' }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('good');
                    console.log(result.output);
                    _this.pagamentoService.cancella(pagamento.PagamentoNo)
                        .then(function (response) {
                        _this.evtAgg.publish('expenseUpdated');
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        insPagamento = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient, PagamentoService_1.PagamentoService, aurelia_event_aggregator_1.EventAggregator, aurelia_dialog_1.DialogService])
        ], insPagamento);
        return insPagamento;
    }());
    exports.insPagamento = insPagamento;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zUGFnYW1lbnRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2luc1BhZ2FtZW50by50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVlBO1FBR0ksc0JBQW9CLElBQWdCLEVBQVUsZ0JBQWtDLEVBQVUsTUFBdUIsRUFDckcsYUFBNEI7WUFEcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUNyRyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQUMxQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDMUMsQ0FBQztRQUVELGdDQUFnQztRQUNoQywyRUFBMkU7UUFDM0Usd0NBQXdDO1FBQ3hDLE1BQU07UUFDTixNQUFNO1FBRUksb0NBQWEsR0FBcEI7WUFBQSxpQkFzQ0M7WUFyQ0csRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckYsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFD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akZMO1lBQUMsOEJBQVU7O3dCQUFBO1FBbUZYLG1CQUFDO0lBQUQsQ0FBQyxBQWxGRCxJQWtGQztJQWxGWSxvQkFBWSxlQWtGeEIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWRpYWxvZyc7XHJcblxyXG5cclxuaW1wb3J0IHtQYWdhbWVudG99IGZyb20gJ3BhZ2FtZW50aS9QYWdhbWVudG8nO1xyXG5pbXBvcnQge1BhZ2FtZW50b1NlcnZpY2V9IGZyb20gJ3BhZ2FtZW50aS9QYWdhbWVudG9TZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7Y29uZmlybU9wZXJhdGlvbn0gZnJvbSAnZGlhbG9ncy9jb25maXJtT3BlcmF0aW9uJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBpbnNQYWdhbWVudG8ge1xyXG5cdHB1YmxpYyBwYWdhbWVudG9Db3JyZW50ZTogUGFnYW1lbnRvO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBwYWdhbWVudG9TZXJ2aWNlOiBQYWdhbWVudG9TZXJ2aWNlLCBwcml2YXRlIGV2dEFnZzogRXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG5cdFx0dGhpcy5wYWdhbWVudG9Db3JyZW50ZSA9IG5ldyBQYWdhbWVudG8oKTtcclxuXHR9IFxyXG5cdFxyXG5cdC8vcHVibGljIHJlZ2lzdHJhemlvbmUoKTogdm9pZCB7XHJcblx0Ly9cdHRoaXMucGFnYW1lbnRvU2VydmljZS5hZ2dpdW5naSh0aGlzLnBhZ2FtZW50b0NvcnJlbnRlKS50aGVuKCh2YWx1ZSkgPT4ge1xyXG5cdC8vXHRcdHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2ZhdHR1cmFBZGRlZCcpO1xyXG5cdC8vXHR9KTtcclxuIC8vICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RyYXppb25lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2FtZW50b0NvcnJlbnRlLkRhdGFQYWdhbWVudG8gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiSW5zZXJpcmUgbGEgZGF0YVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYWdhbWVudG9Db3JyZW50ZS5JbXBvcnRvID09IHVuZGVmaW5lZCB8fCB0aGlzLnBhZ2FtZW50b0NvcnJlbnRlLkltcG9ydG8gPT0gMCkge1xyXG4gICAgICAgICAgICBhbGVydChcIkluc2VyaXJlIGwnaW1wb3J0b1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYWdhbWVudG9Db3JyZW50ZS5DbGllbnRlTm8gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiU2VsZXppb25hcmUgaWwgY2xpZW50ZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wYWdhbWVudG9Db3JyZW50ZS5EZXNjcml6aW9uZSA9PSB1bmRlZmluZWQgfHwgdGhpcy5wYWdhbWVudG9Db3JyZW50ZS5EZXNjcml6aW9uZSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiaW5zZXJpcmUgbGEgZGVzY3JpemlvbmVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2FtZW50b0NvcnJlbnRlLlBhZ2FtZW50b05vID09IHVuZGVmaW5lZCB8fCB0aGlzLnBhZ2FtZW50b0NvcnJlbnRlLlBhZ2FtZW50b05vID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdhbWVudG9TZXJ2aWNlLmFnZ2l1bmdpKHRoaXMucGFnYW1lbnRvQ29ycmVudGUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdhbWVudG9Db3JyZW50ZSA9IG5ldyBQYWdhbWVudG8oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2FtZW50b0NvcnJlbnRlLkRhdGFQYWdhbWVudG8gPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ3BheW1lbnRVcGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnYW1lbnRvU2VydmljZS5tb2RpZmljYSh0aGlzLnBhZ2FtZW50b0NvcnJlbnRlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnYW1lbnRvQ29ycmVudGUgPSBuZXcgUGFnYW1lbnRvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdhbWVudG9Db3JyZW50ZS5EYXRhUGFnYW1lbnRvID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2dEFnZy5wdWJsaXNoKCdwYXltZW50VXBkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgIHRoaXMuc3Blc2VTZXJ2aWNlLmFnZ2l1bmdpKHRoaXMuc3Blc2FDb3JyZW50ZSkudGhlbigodmFsdWUpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICB0aGlzLmV2dEFnZy5wdWJsaXNoKCdleHBlbnNlVXBkYXRlZCcpO1xyXG4gICAgICAgIC8vfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kaWZpY2FSZWNvcmQoJGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBwYWdhbWVudG86IFBhZ2FtZW50byA9ICRldmVudC5kZXRhaWw7XHJcblxyXG4gICAgICAgIHRoaXMucGFnYW1lbnRvQ29ycmVudGUgPSBuZXcgUGFnYW1lbnRvKCk7XHJcbiAgICAgICAgdGhpcy5wYWdhbWVudG9TZXJ2aWNlLmxlZ2dpKHBhZ2FtZW50by5QYWdhbWVudG9ObylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdhbWVudG9Db3JyZW50ZSA9IDxQYWdhbWVudG8+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsbGFSZWNvcmQoJGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBwYWdhbWVudG86IFBhZ2FtZW50byA9ICRldmVudC5kZXRhaWw7XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKHsgdmlld01vZGVsOiBjb25maXJtT3BlcmF0aW9uLCBtb2RlbDogJ2NvbmZlcm1hdGUgbGEgY2FuY2VsbGF6aW9uZSBkZWwgcGFnYW1lbnRvPycgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0Lndhc0NhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvb2QnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5vdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdhbWVudG9TZXJ2aWNlLmNhbmNlbGxhKHBhZ2FtZW50by5QYWdhbWVudG9ObylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2V4cGVuc2VVcGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JhZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59Il19