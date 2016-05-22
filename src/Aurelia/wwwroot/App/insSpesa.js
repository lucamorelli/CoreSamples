var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'aurelia-dialog', 'spese/Spesa', 'spese/SpeseService', 'spese/VoceSpesa', 'dialogs/confirmOperation'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, aurelia_dialog_1, Spesa_1, SpeseService_1, VoceSpesa_1, confirmOperation_1) {
    "use strict";
    var insSpesa = (function () {
        function insSpesa(http, speseService, evtAgg, dialogService) {
            this.http = http;
            this.speseService = speseService;
            this.evtAgg = evtAgg;
            this.dialogService = dialogService;
            this.spesaCorrente = new Spesa_1.Spesa();
            this.spesaCorrente.Voce = new VoceSpesa_1.VoceSpesa();
            this.spesaCorrente.AttesaMovimento = false;
            this.spesaCorrente.NoContoCorrente = false;
        }
        insSpesa.prototype.registrazione = function () {
            var _this = this;
            if (this.spesaCorrente.Data == undefined) {
                alert("Inserire la data");
                return;
            }
            if (this.spesaCorrente.Importo == undefined || this.spesaCorrente.Importo == 0) {
                alert("Inserire l'importo");
                return;
            }
            if (this.spesaCorrente.VoceSpesaNo == undefined) {
                alert("Selezionare la voce spesa");
                return;
            }
            if (this.spesaCorrente.SpesaNo == undefined || this.spesaCorrente.SpesaNo == 0) {
                this.speseService.aggiungi(this.spesaCorrente)
                    .then(function () {
                    _this.spesaCorrente = new Spesa_1.Spesa();
                    _this.spesaCorrente.Data = new Date();
                    _this.evtAgg.publish('expenseUpdated');
                });
            }
            else {
                this.speseService.modifica(this.spesaCorrente)
                    .then(function () {
                    _this.spesaCorrente = new Spesa_1.Spesa();
                    _this.spesaCorrente.Data = new Date();
                    _this.evtAgg.publish('expenseUpdated');
                });
            }
            //      this.speseService.aggiungi(this.spesaCorrente).then((value) => {
            //          this.evtAgg.publish('expenseUpdated');
            //});
        };
        insSpesa.prototype.modificaRecord = function ($event) {
            var _this = this;
            var spesa = $event.detail;
            this.spesaCorrente = new Spesa_1.Spesa();
            this.speseService.leggi(spesa.SpesaNo)
                .then(function (response) {
                _this.spesaCorrente = response.content;
            });
        };
        insSpesa.prototype.cancellaRecord = function ($event) {
            var _this = this;
            var spesa = $event.detail;
            this.dialogService.open({ viewModel: confirmOperation_1.confirmOperation, model: 'confermate la cancellazione della spesa?' }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('good');
                    console.log(result.output);
                    _this.speseService.cancella(spesa.SpesaNo)
                        .then(function (response) {
                        _this.evtAgg.publish('expenseUpdated');
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        insSpesa = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient, SpeseService_1.SpeseService, aurelia_event_aggregator_1.EventAggregator, aurelia_dialog_1.DialogService])
        ], insSpesa);
        return insSpesa;
    }());
    exports.insSpesa = insSpesa;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zU3Blc2EuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvaW5zU3Blc2EudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFZQTtRQUdDLGtCQUFvQixJQUFnQixFQUFVLFlBQTBCLEVBQVUsTUFBdUIsRUFDaEcsYUFBNEI7WUFEakIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1lBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7WUFDaEcsa0JBQWEsR0FBYixhQUFhLENBQWU7WUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDNUMsQ0FBQztRQUVNLGdDQUFhLEdBQXBCO1lBQUEsaUJBa0NDO1lBakNBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMxQixNQUFNLENBQUM7WUFDUixDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hGLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUM7WUFDUixDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDakQsS0FB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ayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge0RpYWxvZ1NlcnZpY2V9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcclxuXHJcbmltcG9ydCB7U3Blc2F9IGZyb20gJ3NwZXNlL1NwZXNhJztcclxuaW1wb3J0IHtTcGVzZVNlcnZpY2V9IGZyb20gJ3NwZXNlL1NwZXNlU2VydmljZSc7XHJcbmltcG9ydCB7Vm9jZVNwZXNhfSBmcm9tICdzcGVzZS9Wb2NlU3Blc2EnO1xyXG5cclxuaW1wb3J0IHtjb25maXJtT3BlcmF0aW9ufSBmcm9tICdkaWFsb2dzL2NvbmZpcm1PcGVyYXRpb24nO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGluc1NwZXNhIHtcclxuXHRwdWJsaWMgc3Blc2FDb3JyZW50ZTogU3Blc2E7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBzcGVzZVNlcnZpY2U6IFNwZXNlU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcixcclxuXHRcdHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG5cdFx0dGhpcy5zcGVzYUNvcnJlbnRlID0gbmV3IFNwZXNhKCk7XHJcblx0XHR0aGlzLnNwZXNhQ29ycmVudGUuVm9jZSA9IG5ldyBWb2NlU3Blc2EoKTtcclxuXHRcdHRoaXMuc3Blc2FDb3JyZW50ZS5BdHRlc2FNb3ZpbWVudG8gPSBmYWxzZTtcclxuXHRcdHRoaXMuc3Blc2FDb3JyZW50ZS5Ob0NvbnRvQ29ycmVudGUgPSBmYWxzZTtcclxuXHR9IFxyXG5cdFxyXG5cdHB1YmxpYyByZWdpc3RyYXppb25lKCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuc3Blc2FDb3JyZW50ZS5EYXRhID09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRhbGVydChcIkluc2VyaXJlIGxhIGRhdGFcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLnNwZXNhQ29ycmVudGUuSW1wb3J0byA9PSB1bmRlZmluZWQgfHwgdGhpcy5zcGVzYUNvcnJlbnRlLkltcG9ydG8gPT0gMCkge1xyXG5cdFx0XHRhbGVydChcIkluc2VyaXJlIGwnaW1wb3J0b1wiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuc3Blc2FDb3JyZW50ZS5Wb2NlU3Blc2FObyA9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0YWxlcnQoXCJTZWxlemlvbmFyZSBsYSB2b2NlIHNwZXNhXCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuc3Blc2FDb3JyZW50ZS5TcGVzYU5vID09IHVuZGVmaW5lZCB8fCB0aGlzLnNwZXNhQ29ycmVudGUuU3Blc2FObyA9PSAwKSB7XHJcblx0XHRcdHRoaXMuc3Blc2VTZXJ2aWNlLmFnZ2l1bmdpKHRoaXMuc3Blc2FDb3JyZW50ZSlcclxuXHRcdFx0XHQudGhlbigoKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnNwZXNhQ29ycmVudGUgPSBuZXcgU3Blc2EoKTtcclxuXHRcdFx0XHRcdHRoaXMuc3Blc2FDb3JyZW50ZS5EYXRhID0gbmV3IERhdGUoKTtcclxuXHRcdFx0XHRcdHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2V4cGVuc2VVcGRhdGVkJyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0dGhpcy5zcGVzZVNlcnZpY2UubW9kaWZpY2EodGhpcy5zcGVzYUNvcnJlbnRlKVxyXG5cdFx0XHRcdC50aGVuKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3Blc2FDb3JyZW50ZSA9IG5ldyBTcGVzYSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5zcGVzYUNvcnJlbnRlLkRhdGEgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5ldnRBZ2cucHVibGlzaCgnZXhwZW5zZVVwZGF0ZWQnKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHJcbiAgLy8gICAgICB0aGlzLnNwZXNlU2VydmljZS5hZ2dpdW5naSh0aGlzLnNwZXNhQ29ycmVudGUpLnRoZW4oKHZhbHVlKSA9PiB7XHJcbiAgLy8gICAgICAgICAgdGhpcy5ldnRBZ2cucHVibGlzaCgnZXhwZW5zZVVwZGF0ZWQnKTtcclxuXHRcdC8vfSk7XHJcblx0fVxyXG5cclxuXHRtb2RpZmljYVJlY29yZCgkZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XHJcblx0XHR2YXIgc3Blc2E6IFNwZXNhID0gJGV2ZW50LmRldGFpbDtcclxuXHJcblx0XHR0aGlzLnNwZXNhQ29ycmVudGUgPSBuZXcgU3Blc2EoKTtcclxuXHRcdHRoaXMuc3Blc2VTZXJ2aWNlLmxlZ2dpKHNwZXNhLlNwZXNhTm8pXHJcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcclxuXHRcdFx0XHR0aGlzLnNwZXNhQ29ycmVudGUgPSA8U3Blc2E+cmVzcG9uc2UuY29udGVudDtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjYW5jZWxsYVJlY29yZCgkZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XHJcblx0XHR2YXIgc3Blc2E6IFNwZXNhID0gJGV2ZW50LmRldGFpbDtcclxuXHJcblx0XHR0aGlzLmRpYWxvZ1NlcnZpY2Uub3Blbih7IHZpZXdNb2RlbDogY29uZmlybU9wZXJhdGlvbiwgbW9kZWw6ICdjb25mZXJtYXRlIGxhIGNhbmNlbGxhemlvbmUgZGVsbGEgc3Blc2E/JyB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuXHRcdFx0aWYgKCFyZXN1bHQud2FzQ2FuY2VsbGVkKSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coJ2dvb2QnKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXN1bHQub3V0cHV0KTtcclxuXHRcdFx0XHR0aGlzLnNwZXNlU2VydmljZS5jYW5jZWxsYShzcGVzYS5TcGVzYU5vKVxyXG5cdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmV2dEFnZy5wdWJsaXNoKCdleHBlbnNlVXBkYXRlZCcpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCdiYWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSJdfQ==