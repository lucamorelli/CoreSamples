var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'aurelia-dialog', 'attivita/Attivita', 'attivita/AttivitaService', 'dialogs/confirmOperation'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, aurelia_dialog_1, Attivita_1, AttivitaService_1, confirmOperation_1) {
    "use strict";
    var insAttivita = (function () {
        function insAttivita(http, attivitaService, evtAgg, dialogService) {
            this.http = http;
            this.attivitaService = attivitaService;
            this.evtAgg = evtAgg;
            this.dialogService = dialogService;
            this.heading = 'Inserimento Attività';
            this.hasValidated = false;
            this.attivitaCorrente = new Attivita_1.Attivita();
            this.attivitaCorrente.Data = new Date();
        }
        insAttivita.prototype.activate = function () {
        };
        insAttivita.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave again?');
        };
        insAttivita.prototype.mostraDati = function () {
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
        insAttivita = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient, AttivitaService_1.AttivitaService, aurelia_event_aggregator_1.EventAggregator, aurelia_dialog_1.DialogService])
        ], insAttivita);
        return insAttivita;
    }());
    exports.insAttivita = insAttivita;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zQXR0aXZpdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvSW5zQXR0aXZpdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFhQTtRQVFJLHFCQUFvQixJQUFnQixFQUFVLGVBQWdDLEVBQVUsTUFBdUIsRUFDbkcsYUFBNEI7WUFEcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBQ25HLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBUnhDLFlBQU8sR0FBRyxzQkFBc0IsQ0FBQztZQUlqQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztZQUsxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVDLENBQUM7UUFFRCw4QkFBUSxHQUFSO1FBQ0EsQ0FBQztRQUVELG1DQUFhLEdBQWI7WUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELGdDQUFVLEdBQVY7WUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBQzdCLGlDQUFpQztZQUNqQyx1QkFBdUI7WUFDdkIsdUdBQXVHO1lBQ3ZHLGtFQUFrRTtZQUNsRSwrQkFBK0I7WUFDL0IsNkRBQTZEO1lBQzdELDhEQUE4RDtZQUM5RCw2REFBNkQ7WUFDN0QscUJBQXFCO1lBQ3JCLFdBQVc7WUFDWCxnQkFBZ0I7WUFDaEIsa0VBQWtFO1lBQ2xFLCtCQUErQjtZQUMvQiw2REFBNkQ7WUFDN0QsOERBQThEO1lBQzlELDZEQUE2RDtZQUM3RCxxQkFBcUI7WUFDckIsV0FBVztZQUVYLFFBQVE7WUFDUix3QkFBd0I7WUFDeEIsK0NBQStDO1lBQy9DLHFEQUFxRDtZQUNyRCxzQ0FBc0M7WUFDdEMsOEVBQThFO1lBQzlFLGVBQWU7WUFDZixXQUFXO1lBQ1gsU0FBUztRQUNiLENBQUM7UUFFRCxvQ0FBYyxHQUFkLFVBQWUsTUFBbUI7WUFBbEMsaUJBUUM7WUFQRyxJQUFJLFFBQVEsR0FBcUIsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUUvQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztpQkFDMUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsZ0JBQWdCLEdBQWEsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCxvQ0FBYyxHQUFkLFVBQWUsTUFBbUI7WUFBbEMsaUJBZ0JDO1lBZkcsSUFBSSxRQUFRLEdBQXFCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsbUNBQWdCLEVBQUUsS0FBSyxFQUFFLDZDQUE2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO2dCQUN2SCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQzt5QkFDN0MsSUFBSSxDQUFDLFVBQUEsUUFBUTt3QkFDVixLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO29CQUMzQyxDQUFDLENBQUMsQ0FBQztnQkFFWCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxrQ0FBWSxHQUFaO1lBQUEsaUJBVUM7WUFSRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzFELElBQUksRUFBRSxTQUFTO29CQUNmLE1BQU0sRUFBRSxPQUFPO29CQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSTtpQkFDdEMsQ0FBQyxDQUFDO2lCQUNFLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUE3Rkw7WUFBQyw4QkFBVTs7dUJBQUE7UUE4Rlgsa0JBQUM7SUFBRCxDQUFDLEFBN0ZELElBNkZDO0lBN0ZZLG1CQUFXLGNBNkZ2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5pbXBvcnQge0RpYWxvZ1NlcnZpY2V9IGZyb20gJ2F1cmVsaWEtZGlhbG9nJztcclxuLy9pbXBvcnQge1ZhbGlkYXRpb25FbmdpbmUsIFZhbGlkYXRvciwgcmVxdWlyZWQsIGVtYWlsfSBmcm9tICdhdXJlbGlhLXZhbGlkYXRlanMnO1xyXG5cclxuaW1wb3J0IHtBdHRpdml0YX0gZnJvbSAnYXR0aXZpdGEvQXR0aXZpdGEnO1xyXG5pbXBvcnQge1VsdGltYUF0dGl2aXRhVm19IGZyb20gJ2F0dGl2aXRhL1VsdGltYUF0dGl2aXRhVm0nO1xyXG5pbXBvcnQge0F0dGl2aXRhU2VydmljZX0gZnJvbSAnYXR0aXZpdGEvQXR0aXZpdGFTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7Y29uZmlybU9wZXJhdGlvbn0gZnJvbSAnZGlhbG9ncy9jb25maXJtT3BlcmF0aW9uJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBpbnNBdHRpdml0YSB7XHJcbiAgICBoZWFkaW5nID0gJ0luc2VyaW1lbnRvIEF0dGl2aXTDoCc7XHJcblxyXG4gICAgYXR0aXZpdGFDb3JyZW50ZTogQXR0aXZpdGE7XHJcblxyXG4gICAgaGFzVmFsaWRhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXM6IHN0cmluZ1tdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBhdHRpdml0YVNlcnZpY2U6IEF0dGl2aXRhU2VydmljZSwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcixcclxuICAgICAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IERpYWxvZ1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUgPSBuZXcgQXR0aXZpdGEoKTtcclxuICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUuRGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9IFxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlIGFnYWluPycpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vc3RyYURhdGkoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYXNWYWxpZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvbk1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgLy90aGlzLnZhbGlkYXRpb25Hcm91cC52YWxpZGF0ZSgpXHJcbiAgICAgICAgLy8gICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgaWYgKHRoaXMuYXR0aXZpdGFDb3JyZW50ZS5BdHRpdml0YU5vID09IHVuZGVmaW5lZCB8fCB0aGlzLmF0dGl2aXRhQ29ycmVudGUuQXR0aXZpdGFObyA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICB0aGlzLmF0dGl2aXRhU2VydmljZS5hZ2dpdW5naSh0aGlzLmF0dGl2aXRhQ29ycmVudGUpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUgPSBuZXcgQXR0aXZpdGEoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlLkRhdGEgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0aGlzLmV2dEFnZy5wdWJsaXNoKCdhdHRpdml0YVVwZGF0ZWQnKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFTZXJ2aWNlLm1vZGlmaWNhKHRoaXMuYXR0aXZpdGFDb3JyZW50ZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZSA9IG5ldyBBdHRpdml0YSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUuRGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2F0dGl2aXRhVXBkYXRlZCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgIH0pXHJcbiAgICAgICAgLy8gICAgLmNhdGNoKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgIGZvciAobGV0IHByb3AgaW4gcmVzdWx0LnByb3BlcnRpZXMpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIGxldCB0aGlzUHJvcCA9IHJlc3VsdC5wcm9wZXJ0aWVzW3Byb3BdO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgaWYgKCF0aGlzUHJvcC5pc1ZhbGlkKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZXMucHVzaChwcm9wICsgXCIgXCIgKyB0aGlzUHJvcC5tZXNzYWdlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgfVxyXG4gICAgICAgIC8vICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZGlmaWNhUmVjb3JkKCRldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB2YXIgYXR0aXZpdGE6IFVsdGltYUF0dGl2aXRhVm0gPSAkZXZlbnQuZGV0YWlsO1xyXG5cclxuICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUgPSBuZXcgQXR0aXZpdGEoKTtcclxuICAgICAgICB0aGlzLmF0dGl2aXRhU2VydmljZS5sZWdnaShhdHRpdml0YS5BdHRpdml0YU5vKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUgPSA8QXR0aXZpdGE+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsbGFSZWNvcmQoJGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBhdHRpdml0YTogVWx0aW1hQXR0aXZpdGFWbSA9ICRldmVudC5kZXRhaWw7XHJcblxyXG4gICAgICAgIHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKHsgdmlld01vZGVsOiBjb25maXJtT3BlcmF0aW9uLCBtb2RlbDogJ2NvbmZlcm1hdGUgbGEgY2FuY2VsbGF6aW9uZSBkZWxsYSBhdHRpdml0w6A/JyB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFyZXN1bHQud2FzQ2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZ29vZCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0Lm91dHB1dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGl2aXRhU2VydmljZS5jYW5jZWxsYShhdHRpdml0YS5BdHRpdml0YU5vKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldnRBZ2cucHVibGlzaCgnYXR0aXZpdGFVcGRhdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JhZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWdnaW9ybmFOb3RlKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXR0aXZpdGFTZXJ2aWNlLnBhdGNoKHRoaXMuYXR0aXZpdGFDb3JyZW50ZS5BdHRpdml0YU5vLCBbe1xyXG4gICAgICAgICAgICAnb3AnOiAncmVwbGFjZScsXHJcbiAgICAgICAgICAgICdwYXRoJzogJy9Ob3RlJyxcclxuICAgICAgICAgICAgJ3ZhbHVlJzogdGhpcy5hdHRpdml0YUNvcnJlbnRlLk5vdGVcclxuICAgICAgICB9XSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldnRBZ2cucHVibGlzaCgnYXR0aXZpdGFVcGRhdGVkJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19