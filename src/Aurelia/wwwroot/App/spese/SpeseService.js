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
    var SpeseService = (function () {
        function SpeseService(http) {
            this.http = http;
            this.url = "api/Spesa";
        }
        SpeseService.prototype.aggiungi = function (item) {
            item.SpesaNo = 0;
            return this.http.post(this.url, item);
        };
        SpeseService.prototype.modifica = function (item) {
            return this.http.put(this.url + "/" + item.SpesaNo, item);
        };
        SpeseService.prototype.leggi = function (itemId) {
            return this.http.get(this.url + "/" + itemId);
        };
        SpeseService.prototype.cancella = function (itemId) {
            return this.http.delete(this.url + "/" + itemId);
        };
        SpeseService.prototype.patch = function (itemId, myPatch) {
            return this.http.patch(this.url + "/" + itemId, myPatch);
        };
        SpeseService.prototype.registra = function (item) {
            if (item.SpesaNo == undefined || item.SpesaNo == 0)
                return this.aggiungi(item);
            else
                return this.modifica(item);
        };
        // end basic actions
        SpeseService.prototype.getUltimeSpese = function (numRecord) {
            return this.http.get(this.url + "/Ultimi/" + numRecord);
        };
        SpeseService.prototype.listaVoci = function () {
            return this.http.get(this.url + "/VociSpesa");
        };
        SpeseService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], SpeseService);
        return SpeseService;
    }());
    exports.SpeseService = SpeseService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Blc2VTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL3NwZXNlL1NwZXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0ksc0JBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLFdBQVcsQ0FBQztRQUlsQyxDQUFDO1FBRU0sK0JBQVEsR0FBZixVQUFnQixJQUFXO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFTSwrQkFBUSxHQUFmLFVBQWdCLElBQVc7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUVNLDRCQUFLLEdBQVosVUFBYSxNQUFjO1lBRXZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNsRCxDQUFDO1FBRU0sK0JBQVEsR0FBZixVQUFnQixNQUFjO1lBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBRU0sNEJBQUssR0FBWixVQUFhLE1BQWMsRUFBRSxPQUFPO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUVNLCtCQUFRLEdBQWYsVUFBZ0IsSUFBVztZQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztnQkFDL0MsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSTtnQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0Qsb0JBQW9CO1FBR2IscUNBQWMsR0FBckIsVUFBc0IsU0FBaUI7WUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFTSxnQ0FBUyxHQUFoQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUE5Q0w7WUFBQyw4QkFBVTs7d0JBQUE7UUFnRFgsbUJBQUM7SUFBRCxDQUFDLEFBL0NELElBK0NDO0lBL0NZLG9CQUFZLGVBK0N4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsi77u/aW1wb3J0IHtTcGVzYX0gZnJvbSAnU3Blc2EnO1xyXG5pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuaW1wb3J0IHtIdHRwUmVzcG9uc2VNZXNzYWdlfSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBTcGVzZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiYXBpL1NwZXNhXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFnZ2l1bmdpKGl0ZW06IFNwZXNhKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgaXRlbS5TcGVzYU5vID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb2RpZmljYShpdGVtOiBTcGVzYSk6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnVybCArIFwiL1wiICsgaXRlbS5TcGVzYU5vLCBpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGVnZ2koaXRlbUlkOiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyBcIi9cIiArIGl0ZW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbGxhKGl0ZW1JZDogbnVtYmVyKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy51cmwgKyBcIi9cIiArIGl0ZW1JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHBhdGNoKGl0ZW1JZDogbnVtYmVyLCBteVBhdGNoKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh0aGlzLnVybCArIFwiL1wiICsgaXRlbUlkLCBteVBhdGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVnaXN0cmEoaXRlbTogU3Blc2EpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICBpZiAoaXRlbS5TcGVzYU5vID09IHVuZGVmaW5lZCB8fCBpdGVtLlNwZXNhTm8gPT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWdnaXVuZ2koaXRlbSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RpZmljYShpdGVtKTtcclxuICAgIH1cclxuICAgIC8vIGVuZCBiYXNpYyBhY3Rpb25zXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRVbHRpbWVTcGVzZShudW1SZWNvcmQ6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvVWx0aW1pL1wiICsgbnVtUmVjb3JkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlzdGFWb2NpKCk6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsICsgXCIvVm9jaVNwZXNhXCIpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==