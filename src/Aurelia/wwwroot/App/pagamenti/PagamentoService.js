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
    var PagamentoService = (function () {
        function PagamentoService(http) {
            this.http = http;
            this.url = "api/pagamento";
        }
        PagamentoService.prototype.aggiungi = function (item) {
            if (item.InRiepilogo == undefined)
                item.InRiepilogo = false;
            if (item.PagamentoNo == undefined)
                item.PagamentoNo = 0;
            return this.http.post(this.url, item);
        };
        PagamentoService.prototype.modifica = function (item) {
            return this.http.put(this.url + "/" + item.PagamentoNo, item);
        };
        PagamentoService.prototype.leggi = function (itemId) {
            return this.http.get(this.url + "/" + itemId);
        };
        PagamentoService.prototype.cancella = function (itemId) {
            return this.http.delete(this.url + "/" + itemId);
        };
        PagamentoService.prototype.patch = function (itemId, myPatch) {
            return this.http.patch(this.url + "/" + itemId, myPatch);
        };
        PagamentoService.prototype.registra = function (item) {
            if (item.PagamentoNo == undefined || item.PagamentoNo == 0)
                return this.aggiungi(item);
            else
                return this.modifica(item);
        };
        // end basic actions
        PagamentoService.prototype.pagamentiCliente = function (idCliente) {
            return this.http.get(this.url + "/PagamentiCliente/" + idCliente);
        };
        PagamentoService.prototype.ultimi = function (numRecord) {
            return this.http.get(this.url + "/Ultimi/" + numRecord);
        };
        PagamentoService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], PagamentoService);
        return PagamentoService;
    }());
    exports.PagamentoService = PagamentoService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnYW1lbnRvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9wYWdhbWVudGkvUGFnYW1lbnRvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0ksMEJBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLGVBQWUsQ0FBQztRQUl0QyxDQUFDO1FBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFlO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO2dCQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVNLG1DQUFRLEdBQWYsVUFBZ0IsSUFBZTtZQUUzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxDQUFDO1FBRU0sZ0NBQUssR0FBWixVQUFhLE1BQWM7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFTSxtQ0FBUSxHQUFmLFVBQWdCLE1BQWM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFTSxnQ0FBSyxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQU87WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBRU0sbUNBQVEsR0FBZixVQUFnQixJQUFlO1lBQzNCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO2dCQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxvQkFBb0I7UUFFYiwyQ0FBZ0IsR0FBdkIsVUFBd0IsU0FBaUI7WUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUVNLGlDQUFNLEdBQWIsVUFBYyxTQUFpQjtZQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQWhETDtZQUFDLDhCQUFVOzs0QkFBQTtRQXlEWCx1QkFBQztJQUFELENBQUMsQUF4REQsSUF3REM7SUF4RFksd0JBQWdCLG1CQXdENUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFnYW1lbnRvfSBmcm9tICdQYWdhbWVudG8nO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtIdHRwUmVzcG9uc2VNZXNzYWdlfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBQYWdhbWVudG9TZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcgPSBcImFwaS9wYWdhbWVudG9cIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWdnaXVuZ2koaXRlbTogUGFnYW1lbnRvKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uSW5SaWVwaWxvZ28gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBpdGVtLkluUmllcGlsb2dvID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGl0ZW0uUGFnYW1lbnRvTm8gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBpdGVtLlBhZ2FtZW50b05vID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb2RpZmljYShpdGVtOiBQYWdhbWVudG8pOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwgKyBcIi9cIiArIGl0ZW0uUGFnYW1lbnRvTm8sIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsZWdnaShpdGVtSWQ6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL1wiICsgaXRlbUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsbGEoaXRlbUlkOiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnVybCArIFwiL1wiICsgaXRlbUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF0Y2goaXRlbUlkOiBudW1iZXIsIG15UGF0Y2gpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHRoaXMudXJsICsgXCIvXCIgKyBpdGVtSWQsIG15UGF0Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RyYShpdGVtOiBQYWdhbWVudG8pOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICBpZiAoaXRlbS5QYWdhbWVudG9ObyA9PSB1bmRlZmluZWQgfHwgaXRlbS5QYWdhbWVudG9ObyA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZ2dpdW5naShpdGVtKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGlmaWNhKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLy8gZW5kIGJhc2ljIGFjdGlvbnNcclxuXHJcbiAgICBwdWJsaWMgcGFnYW1lbnRpQ2xpZW50ZShpZENsaWVudGU6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvUGFnYW1lbnRpQ2xpZW50ZS9cIiArIGlkQ2xpZW50ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVsdGltaShudW1SZWNvcmQ6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvVWx0aW1pL1wiICsgbnVtUmVjb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3B1YmxpYyBhZ2dpdW5naShwYWdhbWVudG86IFBhZ2FtZW50byk6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgLy8gICAgaWYgKHBhZ2FtZW50by5JblJpZXBpbG9nbyA9PSB1bmRlZmluZWQpXHJcbiAgICAvLyAgICAgICAgcGFnYW1lbnRvLkluUmllcGlsb2dvID0gZmFsc2U7XHJcbiAgICAvLyAgICBwYWdhbWVudG8uUGFnYW1lbnRvTm8gPSAwO1xyXG4gICAgLy8gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMudXJsLCBwYWdhbWVudG8pO1xyXG4gICAgLy99XHJcblxyXG59Il19