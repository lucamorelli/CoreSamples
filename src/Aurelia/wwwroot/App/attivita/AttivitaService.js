var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-http-client'], function (require, exports, aurelia_framework_1, aurelia_http_client_1) {
    "use strict";
    var AttivitaService = (function () {
        function AttivitaService(http) {
            this.http = http;
            this.url = "api/Attivita";
        }
        AttivitaService.prototype.registra = function (attivitaVm) {
            if (attivitaVm.AttivitaNo == undefined || attivitaVm.AttivitaNo == 0)
                return this.aggiungi(attivitaVm);
            else
                return this.modifica(attivitaVm);
        };
        AttivitaService.prototype.aggiungi = function (attivitaVm) {
            if (attivitaVm.AttivitaNo == undefined)
                attivitaVm.AttivitaNo = 0;
            if (attivitaVm.DaFatturare == undefined)
                attivitaVm.DaFatturare = false;
            if (attivitaVm.Fatturato == undefined)
                attivitaVm.Fatturato = false;
            if (attivitaVm.NonPrevisto == undefined)
                attivitaVm.NonPrevisto = false;
            return this.http.post(this.url, attivitaVm);
        };
        AttivitaService.prototype.modifica = function (attivitaVm) {
            return this.http.put(this.url + "/" + attivitaVm.AttivitaNo, attivitaVm);
        };
        AttivitaService.prototype.getUltime = function (last) {
            return this.http.get(this.url + "/GetLatest/" + last);
        };
        AttivitaService.prototype.leggi = function (idAttivita) {
            return this.http.get(this.url + "/" + idAttivita);
        };
        AttivitaService.prototype.cancella = function (idAttivita) {
            return this.http.delete(this.url + "/" + idAttivita);
        };
        AttivitaService.prototype.patch = function (idAttivita, myPatch) {
            return this.http.patch(this.url + "/" + idAttivita, myPatch);
        };
        AttivitaService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], AttivitaService);
        return AttivitaService;
    }());
    exports.AttivitaService = AttivitaService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0aXZpdGFTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2F0dGl2aXRhL0F0dGl2aXRhU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0kseUJBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLGNBQWMsQ0FBQztRQUlyQyxDQUFDO1FBRU0sa0NBQVEsR0FBZixVQUFnQixVQUFvQjtZQUNoQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLFNBQVMsSUFBSSxVQUFVLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztnQkFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDckMsSUFBSTtnQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBRU0sa0NBQVEsR0FBZixVQUFnQixVQUFvQjtZQUNoQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztnQkFDbkMsVUFBVSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFFOUIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUM7Z0JBQ3BDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDO2dCQUNsQyxVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUNqQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztnQkFDcEMsVUFBVSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFFbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVNLGtDQUFRLEdBQWYsVUFBZ0IsVUFBb0I7WUFFaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDN0UsQ0FBQztRQUVNLG1DQUFTLEdBQWhCLFVBQWlCLElBQVk7WUFFekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFFTSwrQkFBSyxHQUFaLFVBQWEsVUFBa0I7WUFFM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3RELENBQUM7UUFFTSxrQ0FBUSxHQUFmLFVBQWdCLFVBQWtCO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxVQUFVLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRU0sK0JBQUssR0FBWixVQUFhLFVBQWtCLEVBQUUsT0FBTztZQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFsREw7WUFBQyw4QkFBVTs7MkJBQUE7UUFvRFgsc0JBQUM7SUFBRCxDQUFDLEFBbkRELElBbURDO0lBbkRZLHVCQUFlLGtCQW1EM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXR0aXZpdGF9IGZyb20gJ0F0dGl2aXRhJztcclxuaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcbmltcG9ydCB7SHR0cFJlc3BvbnNlTWVzc2FnZX0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQXR0aXZpdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcgPSBcImFwaS9BdHRpdml0YVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgfSBcclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0cmEoYXR0aXZpdGFWbTogQXR0aXZpdGEpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICBpZiAoYXR0aXZpdGFWbS5BdHRpdml0YU5vID09IHVuZGVmaW5lZCB8fCBhdHRpdml0YVZtLkF0dGl2aXRhTm8gPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWdnaXVuZ2koYXR0aXZpdGFWbSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RpZmljYShhdHRpdml0YVZtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWdnaXVuZ2koYXR0aXZpdGFWbTogQXR0aXZpdGEpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICBpZiAoYXR0aXZpdGFWbS5BdHRpdml0YU5vID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYXR0aXZpdGFWbS5BdHRpdml0YU5vID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGF0dGl2aXRhVm0uRGFGYXR0dXJhcmUgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBhdHRpdml0YVZtLkRhRmF0dHVyYXJlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGF0dGl2aXRhVm0uRmF0dHVyYXRvID09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYXR0aXZpdGFWbS5GYXR0dXJhdG8gPSBmYWxzZTtcclxuICAgICAgICBpZiAoYXR0aXZpdGFWbS5Ob25QcmV2aXN0byA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGF0dGl2aXRhVm0uTm9uUHJldmlzdG8gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsLCBhdHRpdml0YVZtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9kaWZpY2EoYXR0aXZpdGFWbTogQXR0aXZpdGEpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwgKyBcIi9cIiArIGF0dGl2aXRhVm0uQXR0aXZpdGFObywgYXR0aXZpdGFWbSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVsdGltZShsYXN0OiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvR2V0TGF0ZXN0L1wiICsgbGFzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxlZ2dpKGlkQXR0aXZpdGE6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL1wiICsgaWRBdHRpdml0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbGxhKGlkQXR0aXZpdGE6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMudXJsICsgXCIvXCIgKyBpZEF0dGl2aXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF0Y2goaWRBdHRpdml0YTogbnVtYmVyLCBteVBhdGNoKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh0aGlzLnVybCArIFwiL1wiICsgaWRBdHRpdml0YSwgbXlQYXRjaCk7XHJcbiAgICB9XHJcblxyXG59Il19