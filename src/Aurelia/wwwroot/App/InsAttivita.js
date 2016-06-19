var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'aurelia-dialog', 'aurelia-validation', 'aurelia-validatejs', 'attivita/Attivita', 'attivita/AttivitaService', 'dialogs/confirmOperation'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, aurelia_dialog_1, aurelia_validation_1, aurelia_validatejs_1, Attivita_1, AttivitaService_1, confirmOperation_1) {
    "use strict";
    // http://blog.durandal.io/2016/06/14/new-validation-alpha-is-here/
    var insAttivita = (function () {
        function insAttivita(http, attivitaService, evtAgg, dialogService, validationController) {
            this.http = http;
            this.attivitaService = attivitaService;
            this.evtAgg = evtAgg;
            this.dialogService = dialogService;
            this.validationController = validationController;
            this.firstName = '';
            this.lastName = '';
            this.email = '';
            this.heading = 'Inserimento Attività';
            this.hasValidated = false;
            this.attivitaCorrente = new Attivita_1.Attivita();
            this.attivitaCorrente.Data = new Date();
            this.validationController.validateTrigger = aurelia_validation_1.validateTrigger.manual;
        }
        insAttivita.prototype.activate = function () {
        };
        insAttivita.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave again?');
        };
        insAttivita.prototype.mostraDati = function () {
            var errors = this.validationController.validate();
            this.hasValidated = true;
            this.validationMessages = [];
            //this.validationGroup.validate()
            //    .then(result => {
            //        if (this.attivitaCorrente.AttivitaNo == undefined || this.attivitaCorrente.AttivitaNo == 0) {
            //            this.attivitaService.aggiungi(this.attivitaCorrente)
            //                .then(() => {
            //                    this.attivitaCorrente = new Attivita();
            //                    this.attivitaCorrente.Data = new Date();
            //                    this.evtAgg.publish('attivitaUpdated');
            //                });
            //        }
            //        else {
            //            this.attivitaService.modifica(this.attivitaCorrente)
            //                .then(() => {
            //                    this.attivitaCorrente = new Attivita();
            //                    this.attivitaCorrente.Data = new Date();
            //                    this.evtAgg.publish('attivitaUpdated');
            //                });
            //        }
            //    })
            //    .catch(result => {
            //        for (let prop in result.properties) {
            //            let thisProp = result.properties[prop];
            //            if (!thisProp.isValid) {
            //                this.validationMessages.push(prop + " " + thisProp.message);
            //            }
            //        }
            //    });
        };
        insAttivita.prototype.modificaRecord = function ($event) {
            var _this = this;
            var attivita = $event.detail;
            this.attivitaCorrente = new Attivita_1.Attivita();
            this.attivitaService.leggi(attivita.AttivitaNo)
                .then(function (response) {
                _this.attivitaCorrente = response.content;
            });
        };
        insAttivita.prototype.cancellaRecord = function ($event) {
            var _this = this;
            var attivita = $event.detail;
            this.dialogService.open({ viewModel: confirmOperation_1.confirmOperation, model: 'confermate la cancellazione della attività?' }).then(function (result) {
                if (!result.wasCancelled) {
                    console.log('good');
                    console.log(result.output);
                    _this.attivitaService.cancella(attivita.AttivitaNo)
                        .then(function (response) {
                        _this.evtAgg.publish('attivitaUpdated');
                    });
                }
                else {
                    console.log('bad');
                }
            });
        };
        insAttivita.prototype.aggiornaNote = function () {
            var _this = this;
            this.attivitaService.patch(this.attivitaCorrente.AttivitaNo, [{
                    'op': 'replace',
                    'path': '/Note',
                    'value': this.attivitaCorrente.Note
                }])
                .then(function (response) {
                _this.evtAgg.publish('attivitaUpdated');
            });
        };
        __decorate([
            aurelia_validatejs_1.required, 
            __metadata('design:type', String)
        ], insAttivita.prototype, "firstName", void 0);
        __decorate([
            aurelia_validatejs_1.required, 
            __metadata('design:type', String)
        ], insAttivita.prototype, "lastName", void 0);
        __decorate([
            aurelia_validatejs_1.required,
            aurelia_validatejs_1.email, 
            __metadata('design:type', String)
        ], insAttivita.prototype, "email", void 0);
        insAttivita = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient, AttivitaService_1.AttivitaService, aurelia_event_aggregator_1.EventAggregator, aurelia_dialog_1.DialogService, aurelia_validation_1.ValidationController])
        ], insAttivita);
        return insAttivita;
    }());
    exports.insAttivita = insAttivita;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zQXR0aXZpdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvSW5zQXR0aXZpdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFnQkEsbUVBQW1FO0lBR25FO1FBa0JJLHFCQUFvQixJQUFnQixFQUFVLGVBQWdDLEVBQVUsTUFBdUIsRUFDbkcsYUFBNEIsRUFBVSxvQkFBMEM7WUFEeEUsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBQ25HLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBQVUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtZQWpCckYsY0FBUyxHQUFZLEVBQUUsQ0FBQztZQUd4QixhQUFRLEdBQVksRUFBRSxDQUFDO1lBSXZCLFVBQUssR0FBWSxFQUFFLENBQUM7WUFFM0IsWUFBTyxHQUFHLHNCQUFzQixDQUFDO1lBSWpDLGlCQUFZLEdBQVksS0FBSyxDQUFDO1lBSzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFFeEMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsR0FBRyxvQ0FBZSxDQUFDLE1BQU0sQ0FBQztRQUN2RSxDQUFDO1FBRUQsOEJBQVEsR0FBUjtRQUNBLENBQUM7UUFFRCxtQ0FBYSxHQUFiO1lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxnQ0FBVSxHQUFWO1lBQ0ksSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRWxELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7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bXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWRpYWxvZyc7XHJcbi8vaW1wb3J0IHtpbmplY3QsIE5ld0luc3RhbmNlfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcclxuXHJcbmltcG9ydCB7VmFsaWRhdGlvbkNvbnRyb2xsZXIsIHZhbGlkYXRlVHJpZ2dlcn0gZnJvbSAnYXVyZWxpYS12YWxpZGF0aW9uJztcclxuaW1wb3J0IHtyZXF1aXJlZCwgZW1haWx9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGVqcyc7XHJcblxyXG5pbXBvcnQge0F0dGl2aXRhfSBmcm9tICdhdHRpdml0YS9BdHRpdml0YSc7XHJcbmltcG9ydCB7VWx0aW1hQXR0aXZpdGFWbX0gZnJvbSAnYXR0aXZpdGEvVWx0aW1hQXR0aXZpdGFWbSc7XHJcbmltcG9ydCB7QXR0aXZpdGFTZXJ2aWNlfSBmcm9tICdhdHRpdml0YS9BdHRpdml0YVNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtjb25maXJtT3BlcmF0aW9ufSBmcm9tICdkaWFsb2dzL2NvbmZpcm1PcGVyYXRpb24nO1xyXG5cclxuXHJcbi8vIGh0dHA6Ly9ibG9nLmR1cmFuZGFsLmlvLzIwMTYvMDYvMTQvbmV3LXZhbGlkYXRpb24tYWxwaGEtaXMtaGVyZS9cclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBpbnNBdHRpdml0YSB7XHJcbiAgICBAcmVxdWlyZWRcclxuICAgIHB1YmxpYyBmaXJzdE5hbWUgOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBAcmVxdWlyZWRcclxuICAgIHB1YmxpYyBsYXN0TmFtZTogc3RyaW5nICA9ICcnO1xyXG5cclxuICAgIEByZXF1aXJlZFxyXG4gICAgQGVtYWlsXHJcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZyAgPSAnJztcclxuXHJcbiAgICBoZWFkaW5nID0gJ0luc2VyaW1lbnRvIEF0dGl2aXTDoCc7XHJcblxyXG4gICAgYXR0aXZpdGFDb3JyZW50ZTogQXR0aXZpdGE7XHJcblxyXG4gICAgaGFzVmFsaWRhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdHRpdml0YVNlcnZpY2U6IEF0dGl2aXRhU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcixcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlID0gbmV3IEF0dGl2aXRhKCk7XHJcbiAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlLkRhdGEgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlVHJpZ2dlciA9IHZhbGlkYXRlVHJpZ2dlci5tYW51YWw7XHJcbiAgICB9IFxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlIGFnYWluPycpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vc3RyYURhdGkoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGVycm9ycyA9IHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYXNWYWxpZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzID0gW107XHJcblxyXG4gICAgICAgIC8vdGhpcy52YWxpZGF0aW9uR3JvdXAudmFsaWRhdGUoKVxyXG4gICAgICAgIC8vICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgIGlmICh0aGlzLmF0dGl2aXRhQ29ycmVudGUuQXR0aXZpdGFObyA9PSB1bmRlZmluZWQgfHwgdGhpcy5hdHRpdml0YUNvcnJlbnRlLkF0dGl2aXRhTm8gPT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgdGhpcy5hdHRpdml0YVNlcnZpY2UuYWdnaXVuZ2kodGhpcy5hdHRpdml0YUNvcnJlbnRlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlID0gbmV3IEF0dGl2aXRhKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZS5EYXRhID0gbmV3IERhdGUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgdGhpcy5ldnRBZ2cucHVibGlzaCgnYXR0aXZpdGFVcGRhdGVkJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB0aGlzLmF0dGl2aXRhU2VydmljZS5tb2RpZmljYSh0aGlzLmF0dGl2aXRhQ29ycmVudGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUgPSBuZXcgQXR0aXZpdGEoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlLkRhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0aGlzLmV2dEFnZy5wdWJsaXNoKCdhdHRpdml0YVVwZGF0ZWQnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICB9KVxyXG4gICAgICAgIC8vICAgIC5jYXRjaChyZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICBmb3IgKGxldCBwcm9wIGluIHJlc3VsdC5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICBsZXQgdGhpc1Byb3AgPSByZXN1bHQucHJvcGVydGllc1twcm9wXTtcclxuICAgICAgICAvLyAgICAgICAgICAgIGlmICghdGhpc1Byb3AuaXNWYWxpZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzLnB1c2gocHJvcCArIFwiIFwiICsgdGhpc1Byb3AubWVzc2FnZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgIH1cclxuICAgICAgICAvLyAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtb2RpZmljYVJlY29yZCgkZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGF0dGl2aXRhOiBVbHRpbWFBdHRpdml0YVZtID0gJGV2ZW50LmRldGFpbDtcclxuXHJcbiAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlID0gbmV3IEF0dGl2aXRhKCk7XHJcbiAgICAgICAgdGhpcy5hdHRpdml0YVNlcnZpY2UubGVnZ2koYXR0aXZpdGEuQXR0aXZpdGFObylcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlID0gPEF0dGl2aXRhPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbmNlbGxhUmVjb3JkKCRldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB2YXIgYXR0aXZpdGE6IFVsdGltYUF0dGl2aXRhVm0gPSAkZXZlbnQuZGV0YWlsO1xyXG5cclxuICAgICAgICB0aGlzLmRpYWxvZ1NlcnZpY2Uub3Blbih7IHZpZXdNb2RlbDogY29uZmlybU9wZXJhdGlvbiwgbW9kZWw6ICdjb25mZXJtYXRlIGxhIGNhbmNlbGxhemlvbmUgZGVsbGEgYXR0aXZpdMOgPycgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0Lndhc0NhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvb2QnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5vdXRwdXQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRpdml0YVNlcnZpY2UuY2FuY2VsbGEoYXR0aXZpdGEuQXR0aXZpdGFObylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2F0dGl2aXRhVXBkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFnZ2lvcm5hTm90ZSgpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmF0dGl2aXRhU2VydmljZS5wYXRjaCh0aGlzLmF0dGl2aXRhQ29ycmVudGUuQXR0aXZpdGFObywgW3tcclxuICAgICAgICAgICAgJ29wJzogJ3JlcGxhY2UnLFxyXG4gICAgICAgICAgICAncGF0aCc6ICcvTm90ZScsXHJcbiAgICAgICAgICAgICd2YWx1ZSc6IHRoaXMuYXR0aXZpdGFDb3JyZW50ZS5Ob3RlXHJcbiAgICAgICAgfV0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2F0dGl2aXRhVXBkYXRlZCcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufSJdfQ==