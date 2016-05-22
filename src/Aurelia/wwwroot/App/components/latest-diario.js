var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'aurelia-event-aggregator', 'diario/DiarioService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, DiarioService_1) {
    "use strict";
    var latestDiario = (function () {
        function latestDiario(diarioService, element, evtAgg) {
            var _this = this;
            this.diarioService = diarioService;
            this.element = element;
            this.evtAgg = evtAgg;
            this.ultimi = [];
            this.recordNumber = 30;
            this.showRowCommands = false;
            this.evtAgg.subscribe('diarioUpdated', function () {
                _this.diarioService.Ultimi(_this.recordNumber)
                    .then(function (response) {
                    _this.ultimi = response.content;
                });
            });
        }
        latestDiario.prototype.bind = function () {
            var _this = this;
            console.log(this.showRowCommands);
            this.diarioService.Ultimi(this.recordNumber)
                .then(function (response) {
                _this.ultimi = response.content;
            });
        };
        latestDiario.prototype.recordNumberChanged = function () {
        };
        latestDiario.prototype.modifica = function (diario) {
            var e = new CustomEvent('on-modifica-diario', {
                detail: diario,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        latestDiario.prototype.cancella = function (diario) {
            var e = new CustomEvent('on-cancella-diario', {
                detail: diario,
                bubbles: true
            });
            this.element.dispatchEvent(e);
        };
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], latestDiario.prototype, "recordNumber", void 0);
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Boolean)
        ], latestDiario.prototype, "showRowCommands", void 0);
        latestDiario = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [DiarioService_1.DiarioService, Element, aurelia_event_aggregator_1.EventAggregator])
        ], latestDiario);
        return latestDiario;
    }());
    exports.latestDiario = latestDiario;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF0ZXN0LWRpYXJpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9jb21wb25lbnRzL2xhdGVzdC1kaWFyaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFRQTtRQU1JLHNCQUFvQixhQUE0QixFQUFVLE9BQWdCLEVBQVUsTUFBdUI7WUFOL0csaUJBK0NDO1lBekN1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQUFVLFlBQU8sR0FBUCxPQUFPLENBQVM7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtZQUozRyxXQUFNLEdBQWEsRUFBRSxDQUFDO1lBS2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRTdCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRTtnQkFDbkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQztxQkFDdkMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDVixLQUFJLENBQUMsTUFBTSxHQUFhLFFBQVEsQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU0sMkJBQUksR0FBWDtZQUFBLGlCQU1DO1lBTEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDdkMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsTUFBTSxHQUFhLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBRU0sMENBQW1CLEdBQTFCO1FBRUEsQ0FBQztRQUVNLCtCQUFRLEdBQWYsVUFBZ0IsTUFBYztZQUUxQixJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDMUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVNLCtCQUFRLEdBQWYsVUFBZ0IsTUFBYztZQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDMUMsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQTFDRDtZQUFDLDRCQUFROzswREFBQTtRQUNUO1lBQUMsNEJBQVE7OzZEQUFBO1FBTGI7WUFBQyw4QkFBVTs7d0JBQUE7UUFnRFgsbUJBQUM7SUFBRCxDQUFDLEFBL0NELElBK0NDO0lBL0NZLG9CQUFZLGVBK0N4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XHJcblxyXG5pbXBvcnQge0RpYXJpb1NlcnZpY2V9IGZyb20gJ2RpYXJpby9EaWFyaW9TZXJ2aWNlJztcclxuaW1wb3J0IHtEaWFyaW99IGZyb20gJ2RpYXJpby9EaWFyaW8nO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIGxhdGVzdERpYXJpbyB7XHJcblxyXG4gICAgdWx0aW1pOiBEaWFyaW9bXSA9IFtdO1xyXG4gICAgQGJpbmRhYmxlIHJlY29yZE51bWJlcjogbnVtYmVyO1xyXG4gICAgQGJpbmRhYmxlIHNob3dSb3dDb21tYW5kczogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGRpYXJpb1NlcnZpY2U6IERpYXJpb1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudDogRWxlbWVudCwgcHJpdmF0ZSBldnRBZ2c6IEV2ZW50QWdncmVnYXRvcikge1xyXG4gICAgICAgIHRoaXMucmVjb3JkTnVtYmVyID0gMzA7XHJcbiAgICAgICAgdGhpcy5zaG93Um93Q29tbWFuZHMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5ldnRBZ2cuc3Vic2NyaWJlKCdkaWFyaW9VcGRhdGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYXJpb1NlcnZpY2UuVWx0aW1pKHRoaXMucmVjb3JkTnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWx0aW1pID0gPERpYXJpb1tdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYmluZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNob3dSb3dDb21tYW5kcyk7XHJcbiAgICAgICAgdGhpcy5kaWFyaW9TZXJ2aWNlLlVsdGltaSh0aGlzLnJlY29yZE51bWJlcilcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bHRpbWkgPSA8RGlhcmlvW10+cmVzcG9uc2UuY29udGVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlY29yZE51bWJlckNoYW5nZWQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb2RpZmljYShkaWFyaW86IERpYXJpbyk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgZSA9IG5ldyBDdXN0b21FdmVudCgnb24tbW9kaWZpY2EtZGlhcmlvJywge1xyXG4gICAgICAgICAgICBkZXRhaWw6IGRpYXJpbyxcclxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWxsYShkaWFyaW86IERpYXJpbyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlID0gbmV3IEN1c3RvbUV2ZW50KCdvbi1jYW5jZWxsYS1kaWFyaW8nLCB7XHJcbiAgICAgICAgICAgIGRldGFpbDogZGlhcmlvLFxyXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICB9XHJcblxyXG59Il19