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
    var DiarioService = (function () {
        // start basic actions
        function DiarioService(http) {
            this.http = http;
            this.url = "api/diario";
        }
        DiarioService.prototype.aggiungi = function (item) {
            if (item.DiarioNo == undefined)
                item.DiarioNo = 0;
            return this.http.post(this.url, item);
        };
        DiarioService.prototype.modifica = function (item) {
            return this.http.put(this.url + "/" + item.DiarioNo, item);
        };
        DiarioService.prototype.leggi = function (itemId) {
            return this.http.get(this.url + "/" + itemId);
        };
        DiarioService.prototype.cancella = function (itemId) {
            return this.http.delete(this.url + "/" + itemId);
        };
        DiarioService.prototype.patch = function (itemId, myPatch) {
            return this.http.patch(this.url + "/" + itemId, myPatch);
        };
        DiarioService.prototype.registra = function (item) {
            if (item.DiarioNo == undefined || item.DiarioNo == 0)
                return this.aggiungi(item);
            else
                return this.modifica(item);
        };
        // end basic actions
        DiarioService.prototype.Ultimi = function (numero) {
            return this.http.get(this.url + "/Ultimi/" + numero);
        };
        DiarioService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_http_client_1.HttpClient])
        ], DiarioService);
        return DiarioService;
    }());
    exports.DiarioService = DiarioService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhcmlvU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9kaWFyaW8vRGlhcmlvU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0ksc0JBQXNCO1FBQ3RCLHVCQUFvQixJQUFnQjtZQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1lBSDVCLFFBQUcsR0FBVyxZQUFZLENBQUM7UUFLbkMsQ0FBQztRQUVNLGdDQUFRLEdBQWYsVUFBZ0IsSUFBWTtZQUN4QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVNLGdDQUFRLEdBQWYsVUFBZ0IsSUFBWTtZQUV4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRU0sNkJBQUssR0FBWixVQUFhLE1BQWM7WUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFFTSxnQ0FBUSxHQUFmLFVBQWdCLE1BQWM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFFTSw2QkFBSyxHQUFaLFVBQWEsTUFBYyxFQUFFLE9BQU87WUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBRU0sZ0NBQVEsR0FBZixVQUFnQixJQUFZO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO2dCQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxvQkFBb0I7UUFFYiw4QkFBTSxHQUFiLFVBQWMsTUFBYztZQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDekQsQ0FBQztRQTNDTDtZQUFDLDhCQUFVOzt5QkFBQTtRQTZDWCxvQkFBQztJQUFELENBQUMsQUE1Q0QsSUE0Q0M7SUE1Q1kscUJBQWEsZ0JBNEN6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaWFyaW99IGZyb20gJ0RpYXJpbyc7XHJcbmltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5pbXBvcnQge0h0dHBSZXNwb25zZU1lc3NhZ2V9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIERpYXJpb1NlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiYXBpL2RpYXJpb1wiO1xyXG5cclxuICAgIC8vIHN0YXJ0IGJhc2ljIGFjdGlvbnNcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWdnaXVuZ2koaXRlbTogRGlhcmlvKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgaWYgKGl0ZW0uRGlhcmlvTm8gPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBpdGVtLkRpYXJpb05vID0gMDtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy51cmwsIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb2RpZmljYShpdGVtOiBEaWFyaW8pOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy51cmwgKyBcIi9cIiArIGl0ZW0uRGlhcmlvTm8sIGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsZWdnaShpdGVtSWQ6IG51bWJlcik6IFByb21pc2U8SHR0cFJlc3BvbnNlTWVzc2FnZT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArIFwiL1wiICsgaXRlbUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FuY2VsbGEoaXRlbUlkOiBudW1iZXIpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnVybCArIFwiL1wiICsgaXRlbUlkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGF0Y2goaXRlbUlkOiBudW1iZXIsIG15UGF0Y2gpOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHRoaXMudXJsICsgXCIvXCIgKyBpdGVtSWQsIG15UGF0Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWdpc3RyYShpdGVtOiBEaWFyaW8pOiBQcm9taXNlPEh0dHBSZXNwb25zZU1lc3NhZ2U+IHtcclxuICAgICAgICBpZiAoaXRlbS5EaWFyaW9ObyA9PSB1bmRlZmluZWQgfHwgaXRlbS5EaWFyaW9ObyA9PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZ2dpdW5naShpdGVtKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGlmaWNhKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLy8gZW5kIGJhc2ljIGFjdGlvbnNcclxuXHJcbiAgICBwdWJsaWMgVWx0aW1pKG51bWVybzogbnVtYmVyKTogUHJvbWlzZTxIdHRwUmVzcG9uc2VNZXNzYWdlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy51cmwgKyBcIi9VbHRpbWkvXCIgKyBudW1lcm8pO1xyXG4gICAgfVxyXG5cclxufSJdfQ==