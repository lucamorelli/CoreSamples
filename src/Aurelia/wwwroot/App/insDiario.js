var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client', 'aurelia-event-aggregator', 'diario/Diario', 'diario/DiarioService'], function (require, exports, aurelia_framework_1, aurelia_http_client_1, aurelia_event_aggregator_1, Diario_1, DiarioService_1) {
    "use strict";
    var insDiario = (function () {
        function insDiario(http, diarioService, evtAgg) {
            this.http = http;
            this.diarioService = diarioService;
            this.evtAgg = evtAgg;
            this.voceCorrente = new Diario_1.Diario();
            this.voceCorrente.TsInserimento = new Date();
        }
        insDiario.prototype.activate = function () {
        };
        insDiario.prototype.canDeactivate = function () {
            return confirm('Are you sure you want to leave again?');
        };
        insDiario.prototype.registrazione = function () {
            var _this = this;
            if (this.voceCorrente.Titolo == undefined || this.voceCorrente.Titolo.trim() == '') {
                alert('inserire il titolo');
                return;
            }
            if (this.voceCorrente.Contenuto == undefined || this.voceCorrente.Contenuto.trim() == '') {
                alert('inserire il Contenuto');
                return;
            }
            if (this.voceCorrente.TsInserimento == undefined) {
                alert('inserire la Data');
                return;
            }
            if (this.voceCorrente.DiarioNo == undefined || this.voceCorrente.DiarioNo == 0) {
                this.diarioService.aggiungi(this.voceCorrente)
                    .then(function () {
                    _this.voceCorrente = new Diario_1.Diario();
                    _this.voceCorrente.TsInserimento = new Date();
                    _this.evtAgg.publish('diarioUpdated');
                });
            }
            else {
                this.diarioService.modifica(this.voceCorrente)
                    .then(function () {
                    _this.voceCorrente = new Diario_1.Diario();
                    _this.voceCorrente.TsInserimento = new Date();
                    _this.evtAgg.publish('diarioUpdated');
                });
            }
            //this.diarioService.aggiungi(this.voceCorrente).then((value) => {
            //	this.evtAgg.publish('diarioUpdated');
            //});
        };
        insDiario.prototype.modificaRecord = function ($event) {
            var _this = this;
            var diario = $event.detail;
            this.voceCorrente = new Diario_1.Diario();
            this.diarioService.leggi(diario.DiarioNo)
                .then(function (response) {
                _this.voceCorrente = response.content;
            });
        };
        insDiario.prototype.cancellaRecord = function ($event) {
            var _this = this;
            var diario = $event.detail;
            if (confirm("confermate la cancellazione del diario " + diario.Titolo + " del " + diario.TsInserimento)) {
                this.diarioService.cancella(diario.DiarioNo)
                    .then(function (response) {
                    _this.evtAgg.publish('attivitaUpdated');
                });
            }
        };
        insDiario = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient, DiarioService_1.DiarioService, aurelia_event_aggregator_1.EventAggregator])
        ], insDiario);
        return insDiario;
    }());
    exports.insDiario = insDiario;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zRGlhcmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2luc0RpYXJpby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQVFBO1FBR0MsbUJBQW9CLElBQWdCLEVBQVUsYUFBNEIsRUFBVSxNQUF1QjtZQUF2RixTQUFJLEdBQUosSUFBSSxDQUFZO1lBQVUsa0JBQWEsR0FBYixhQUFhLENBQWU7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUMxRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQyxDQUFDO1FBRUQsNEJBQVEsR0FBUjtRQUNBLENBQUM7UUFFRCxpQ0FBYSxHQUFiO1lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFHTSxpQ0FBYSxHQUFwQjtZQUFBLGlCQXNDQztZQXJDRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakYsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdkYsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO3FCQUN6QyxJQUFJLENBQUM7b0JBQ0YsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO29CQUNqQyxLQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUM3QyxLQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDekMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztxQkFDekMsSUFBSSxDQUFDO29CQUNGLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztvQkFDakMsS0FBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztvQkFDN0MsS0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztZQUdQLGtFQUFrRTtZQUNsRSx3Q0FBd0M7WUFDeEMsS0FBSztRQUNILENBQUM7UUFFRCxrQ0FBYyxHQUFkLFVBQWUsTUFBbUI7WUFBbEMsaUJBUUM7WUFQRyxJQUFJLE1BQU0sR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBRW5DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2lCQUNwQyxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNWLEtBQUksQ0FBQyxZQUFZLEdBQVcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCxrQ0FBYyxHQUFkLFVBQWUsTUFBbUI7WUFBbEMsaUJBVUM7WUFURyxJQUFJLE1BQU0sR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBR25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx5Q0FBeUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0RyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO3FCQUN2QyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQzNDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUE3RUw7WUFBQyw4QkFBVTs7cUJBQUE7UUErRVgsZ0JBQUM7SUFBRCxDQUFDLEFBOUVELElBOEVDO0lBOUVZLGlCQUFTLFlBOEVyQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xyXG5cclxuaW1wb3J0IHtEaWFyaW99IGZyb20gJ2RpYXJpby9EaWFyaW8nO1xyXG5pbXBvcnQge0RpYXJpb1NlcnZpY2V9IGZyb20gJ2RpYXJpby9EaWFyaW9TZXJ2aWNlJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBpbnNEaWFyaW8ge1xyXG5cdHB1YmxpYyB2b2NlQ29ycmVudGU6IERpYXJpbztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIGRpYXJpb1NlcnZpY2U6IERpYXJpb1NlcnZpY2UsIHByaXZhdGUgZXZ0QWdnOiBFdmVudEFnZ3JlZ2F0b3IpIHtcclxuXHRcdHRoaXMudm9jZUNvcnJlbnRlID0gbmV3IERpYXJpbygpO1xyXG5cdFx0dGhpcy52b2NlQ29ycmVudGUuVHNJbnNlcmltZW50byA9IG5ldyBEYXRlKCk7XHJcbiAgICB9IFxyXG5cclxuICAgIGFjdGl2YXRlKCkge1xyXG4gICAgfVxyXG5cclxuICAgIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZSBhZ2Fpbj8nKTtcclxuICAgIH1cclxuXHJcblx0XHJcbiAgICBwdWJsaWMgcmVnaXN0cmF6aW9uZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy52b2NlQ29ycmVudGUuVGl0b2xvID09IHVuZGVmaW5lZCB8fCB0aGlzLnZvY2VDb3JyZW50ZS5UaXRvbG8udHJpbSgpID09ICcnKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdpbnNlcmlyZSBpbCB0aXRvbG8nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZvY2VDb3JyZW50ZS5Db250ZW51dG8gPT0gdW5kZWZpbmVkIHx8IHRoaXMudm9jZUNvcnJlbnRlLkNvbnRlbnV0by50cmltKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ2luc2VyaXJlIGlsIENvbnRlbnV0bycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52b2NlQ29ycmVudGUuVHNJbnNlcmltZW50byA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgYWxlcnQoJ2luc2VyaXJlIGxhIERhdGEnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZvY2VDb3JyZW50ZS5EaWFyaW9ObyA9PSB1bmRlZmluZWQgfHwgdGhpcy52b2NlQ29ycmVudGUuRGlhcmlvTm8gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYXJpb1NlcnZpY2UuYWdnaXVuZ2kodGhpcy52b2NlQ29ycmVudGUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52b2NlQ29ycmVudGUgPSBuZXcgRGlhcmlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52b2NlQ29ycmVudGUuVHNJbnNlcmltZW50byA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldnRBZ2cucHVibGlzaCgnZGlhcmlvVXBkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpYXJpb1NlcnZpY2UubW9kaWZpY2EodGhpcy52b2NlQ29ycmVudGUpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52b2NlQ29ycmVudGUgPSBuZXcgRGlhcmlvKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52b2NlQ29ycmVudGUuVHNJbnNlcmltZW50byA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldnRBZ2cucHVibGlzaCgnZGlhcmlvVXBkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblx0XHQvL3RoaXMuZGlhcmlvU2VydmljZS5hZ2dpdW5naSh0aGlzLnZvY2VDb3JyZW50ZSkudGhlbigodmFsdWUpID0+IHtcclxuXHRcdC8vXHR0aGlzLmV2dEFnZy5wdWJsaXNoKCdkaWFyaW9VcGRhdGVkJyk7XHJcblx0XHQvL30pO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZGlmaWNhUmVjb3JkKCRldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB2YXIgZGlhcmlvOiBEaWFyaW8gPSAkZXZlbnQuZGV0YWlsO1xyXG5cclxuICAgICAgICB0aGlzLnZvY2VDb3JyZW50ZSA9IG5ldyBEaWFyaW8oKTtcclxuICAgICAgICB0aGlzLmRpYXJpb1NlcnZpY2UubGVnZ2koZGlhcmlvLkRpYXJpb05vKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZvY2VDb3JyZW50ZSA9IDxEaWFyaW8+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FuY2VsbGFSZWNvcmQoJGV2ZW50OiBDdXN0b21FdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHZhciBkaWFyaW86IERpYXJpbyA9ICRldmVudC5kZXRhaWw7XHJcblxyXG5cclxuICAgICAgICBpZiAoY29uZmlybShcImNvbmZlcm1hdGUgbGEgY2FuY2VsbGF6aW9uZSBkZWwgZGlhcmlvIFwiICsgZGlhcmlvLlRpdG9sbyArIFwiIGRlbCBcIiArIGRpYXJpby5Uc0luc2VyaW1lbnRvKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpYXJpb1NlcnZpY2UuY2FuY2VsbGEoZGlhcmlvLkRpYXJpb05vKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZ0QWdnLnB1Ymxpc2goJ2F0dGl2aXRhVXBkYXRlZCcpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==