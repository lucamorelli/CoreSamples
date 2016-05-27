var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'aurelia-dialog', 'aurelia-validatejs', 'attivita/Attivita', 'attivita/AttivitaService', 'dialogs/confirmOperation'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, aurelia_dialog_1, aurelia_validatejs_1, Attivita_1, AttivitaService_1, confirmOperation_1) {
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
            var reporter = aurelia_validatejs_1.ValidationEngine.getValidationReporter(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zQXR0aXZpdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvSW5zQXR0aXZpdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFhQTtRQVFJLHFCQUFvQixJQUFnQixFQUFVLGVBQWdDLEVBQVUsTUFBdUIsRUFDbkcsYUFBNEI7WUFEcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1lBQ25HLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBUnhDLFlBQU8sR0FBRyxzQkFBc0IsQ0FBQztZQUlqQyxpQkFBWSxHQUFZLEtBQUssQ0FBQztZQUsxQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVDLENBQUM7UUFFRCw4QkFBUSxHQUFSO1FBQ0EsQ0FBQztRQUVELG1DQUFhLEdBQWI7WUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUVELGdDQUFVLEdBQVY7WUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBRTdCLElBQUksUUFBUSxHQUF1QixxQ0FBZ0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRixpQ0FBaUM7WUFDakMsdUJBQXVCO1lBQ3ZCLHVHQUF1RztZQUN2RyxrRUFBa0U7WUFDbEUsK0JBQStCO1lBQy9CLDZEQUE2RDtZQUM3RCw4REFBOEQ7WUFDOUQsNkRBQTZEO1lBQzdELHFCQUFxQjtZQUNyQixXQUFXO1lBQ1gsZ0JBQWdCO1lBQ2hCLGtFQUFrRTtZQUNsRSwrQkFBK0I7WUFDL0IsNkRBQTZEO1lBQzdELDhEQUE4RDtZQUM5RCw2REFBNkQ7WUFDN0QscUJBQXFCO1lBQ3JCLFdBQVc7WUFFWCxRQUFRO1lBQ1Isd0JBQXdCO1lBQ3hCLCtDQUErQztZQUMvQyxxREFBcUQ7WUFDckQsc0NBQXNDO1lBQ3RDLDhFQUE4RTtZQUM5RSxlQUFlO1lBQ2YsV0FBVztZQUNYLFNBQVM7UUFDYixDQUFDO1FBRUQsb0NBQWMsR0FBZCxVQUFlLE1BQW1CO1lBQWxDLGlCQVFDO1lBUEcsSUFBSSxRQUFRLEdBQXFCLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFFL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7aUJBQzFDLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsS0FBSSxDQUFDLGdCQUFnQixHQUFhLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQsb0NBQWMsR0FBZCxVQUFlLE1BQW1CO1lBQWxDLGlCQWdCQztZQWZHLElBQUksUUFBUSxHQUFxQixNQUFNLENBQUMsTUFBTSxDQUFDO1lBRS9DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLG1DQUFnQixFQUFFLEtBQUssRUFBRSw2Q0FBNkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtnQkFDdkgsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7eUJBQzdDLElBQUksQ0FBQyxVQUFBLFFBQVE7d0JBQ1YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLENBQUM7Z0JBRVgsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsa0NBQVksR0FBWjtZQUFBLGlCQVVDO1lBUkcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMxRCxJQUFJLEVBQUUsU0FBUztvQkFDZixNQUFNLEVBQUUsT0FBTztvQkFDZixPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7aUJBQ3RDLENBQUMsQ0FBQztpQkFDRSxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBL0ZMO1lBQUMsOEJBQVU7O3VCQUFBO1FBZ0dYLGtCQUFDO0lBQUQsQ0FBQyxBQS9GRCxJQStGQztJQS9GWSxtQkFBVyxjQStGdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIu+7v2ltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHtEaWFsb2dTZXJ2aWNlfSBmcm9tICdhdXJlbGlhLWRpYWxvZyc7XHJcbmltcG9ydCB7VmFsaWRhdGlvbkVuZ2luZSwgVmFsaWRhdG9yLCBWYWxpZGF0aW9uUmVwb3J0ZXJ9IGZyb20gJ2F1cmVsaWEtdmFsaWRhdGVqcyc7XHJcblxyXG5pbXBvcnQge0F0dGl2aXRhfSBmcm9tICdhdHRpdml0YS9BdHRpdml0YSc7XHJcbmltcG9ydCB7VWx0aW1hQXR0aXZpdGFWbX0gZnJvbSAnYXR0aXZpdGEvVWx0aW1hQXR0aXZpdGFWbSc7XHJcbmltcG9ydCB7QXR0aXZpdGFTZXJ2aWNlfSBmcm9tICdhdHRpdml0YS9BdHRpdml0YVNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtjb25maXJtT3BlcmF0aW9ufSBmcm9tICdkaWFsb2dzL2NvbmZpcm1PcGVyYXRpb24nO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGluc0F0dGl2aXRhIHtcclxuICAgIGhlYWRpbmcgPSAnSW5zZXJpbWVudG8gQXR0aXZpdMOgJztcclxuXHJcbiAgICBhdHRpdml0YUNvcnJlbnRlOiBBdHRpdml0YTtcclxuXHJcbiAgICBoYXNWYWxpZGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHZhbGlkYXRpb25NZXNzYWdlczogc3RyaW5nW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGF0dGl2aXRhU2VydmljZTogQXR0aXZpdGFTZXJ2aWNlLCBwcml2YXRlIGV2dEFnZzogRXZlbnRBZ2dyZWdhdG9yLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogRGlhbG9nU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZSA9IG5ldyBBdHRpdml0YSgpO1xyXG4gICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZS5EYXRhID0gbmV3IERhdGUoKTtcclxuICAgIH0gXHJcblxyXG4gICAgYWN0aXZhdGUoKSB7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBjYW5EZWFjdGl2YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmUgYWdhaW4/Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgbW9zdHJhRGF0aSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhc1ZhbGlkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uTWVzc2FnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIHJlcG9ydGVyOiBWYWxpZGF0aW9uUmVwb3J0ZXIgPSBWYWxpZGF0aW9uRW5naW5lLmdldFZhbGlkYXRpb25SZXBvcnRlcih0aGlzKTtcclxuICAgICAgICAvL3RoaXMudmFsaWRhdGlvbkdyb3VwLnZhbGlkYXRlKClcclxuICAgICAgICAvLyAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICBpZiAodGhpcy5hdHRpdml0YUNvcnJlbnRlLkF0dGl2aXRhTm8gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYXR0aXZpdGFDb3JyZW50ZS5BdHRpdml0YU5vID09IDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFTZXJ2aWNlLmFnZ2l1bmdpKHRoaXMuYXR0aXZpdGFDb3JyZW50ZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZSA9IG5ldyBBdHRpdml0YSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGl2aXRhQ29ycmVudGUuRGF0YSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2F0dGl2aXRhVXBkYXRlZCcpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgdGhpcy5hdHRpdml0YVNlcnZpY2UubW9kaWZpY2EodGhpcy5hdHRpdml0YUNvcnJlbnRlKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRpdml0YUNvcnJlbnRlID0gbmV3IEF0dGl2aXRhKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZS5EYXRhID0gbmV3IERhdGUoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgdGhpcy5ldnRBZ2cucHVibGlzaCgnYXR0aXZpdGFVcGRhdGVkJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgfSlcclxuICAgICAgICAvLyAgICAuY2F0Y2gocmVzdWx0ID0+IHtcclxuICAgICAgICAvLyAgICAgICAgZm9yIChsZXQgcHJvcCBpbiByZXN1bHQucHJvcGVydGllcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgbGV0IHRoaXNQcm9wID0gcmVzdWx0LnByb3BlcnRpZXNbcHJvcF07XHJcbiAgICAgICAgLy8gICAgICAgICAgICBpZiAoIXRoaXNQcm9wLmlzVmFsaWQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25NZXNzYWdlcy5wdXNoKHByb3AgKyBcIiBcIiArIHRoaXNQcm9wLm1lc3NhZ2UpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbW9kaWZpY2FSZWNvcmQoJGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBhdHRpdml0YTogVWx0aW1hQXR0aXZpdGFWbSA9ICRldmVudC5kZXRhaWw7XHJcblxyXG4gICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZSA9IG5ldyBBdHRpdml0YSgpO1xyXG4gICAgICAgIHRoaXMuYXR0aXZpdGFTZXJ2aWNlLmxlZ2dpKGF0dGl2aXRhLkF0dGl2aXRhTm8pXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFDb3JyZW50ZSA9IDxBdHRpdml0YT5yZXNwb25zZS5jb250ZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYW5jZWxsYVJlY29yZCgkZXZlbnQ6IEN1c3RvbUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIGF0dGl2aXRhOiBVbHRpbWFBdHRpdml0YVZtID0gJGV2ZW50LmRldGFpbDtcclxuXHJcbiAgICAgICAgdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oeyB2aWV3TW9kZWw6IGNvbmZpcm1PcGVyYXRpb24sIG1vZGVsOiAnY29uZmVybWF0ZSBsYSBjYW5jZWxsYXppb25lIGRlbGxhIGF0dGl2aXTDoD8nIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdC53YXNDYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdnb29kJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQub3V0cHV0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXR0aXZpdGFTZXJ2aWNlLmNhbmNlbGxhKGF0dGl2aXRhLkF0dGl2aXRhTm8pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2dEFnZy5wdWJsaXNoKCdhdHRpdml0YVVwZGF0ZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYmFkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZ2dpb3JuYU5vdGUoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5hdHRpdml0YVNlcnZpY2UucGF0Y2godGhpcy5hdHRpdml0YUNvcnJlbnRlLkF0dGl2aXRhTm8sIFt7XHJcbiAgICAgICAgICAgICdvcCc6ICdyZXBsYWNlJyxcclxuICAgICAgICAgICAgJ3BhdGgnOiAnL05vdGUnLFxyXG4gICAgICAgICAgICAndmFsdWUnOiB0aGlzLmF0dGl2aXRhQ29ycmVudGUuTm90ZVxyXG4gICAgICAgIH1dKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2dEFnZy5wdWJsaXNoKCdhdHRpdml0YVVwZGF0ZWQnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=