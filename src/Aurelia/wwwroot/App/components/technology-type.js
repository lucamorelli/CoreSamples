var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-framework', 'tabelle/TabelleService'], function (require, exports, aurelia_framework_1, aurelia_framework_2, TabelleService_1) {
    "use strict";
    //@logClass
    var technologyType = (function () {
        function technologyType(tabelleService) {
            var _this = this;
            this.tabelleService = tabelleService;
            //    @logProperty
            this.tecnologie = [];
            this.tabelleService.getTecnologieAttive()
                .then(function (response) {
                _this.tecnologie = response.content;
            });
        }
        __decorate([
            aurelia_framework_2.bindable, 
            __metadata('design:type', Number)
        ], technologyType.prototype, "tecnologiaCorrente", void 0);
        technologyType = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [TabelleService_1.TabelleService])
        ], technologyType);
        return technologyType;
    }());
    exports.technologyType = technologyType;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVjaG5vbG9neS10eXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL2NvbXBvbmVudHMvdGVjaG5vbG9neS10eXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBVUEsV0FBVztJQUVYO1FBUUksd0JBQW9CLGNBQThCO1lBUnRELGlCQWNDO1lBTnVCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtZQUxsRCxrQkFBa0I7WUFDbEIsZUFBVSxHQUFpQixFQUFFLENBQUM7WUFLMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRTtpQkFDcEMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixLQUFJLENBQUMsVUFBVSxHQUFpQixRQUFRLENBQUMsT0FBTyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQVBEO1lBQUMsNEJBQVE7O2tFQUFBO1FBUGI7WUFBQyw4QkFBVTs7MEJBQUE7UUFlWCxxQkFBQztJQUFELENBQUMsQUFkRCxJQWNDO0lBZFksc0JBQWMsaUJBYzFCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyLvu79pbXBvcnQge2F1dG9pbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuaW1wb3J0IHtUZWNub2xvZ2lhfSBmcm9tICd0YWJlbGxlL1RlY25vbG9naWEnO1xyXG5pbXBvcnQge1RhYmVsbGVTZXJ2aWNlfSBmcm9tICd0YWJlbGxlL1RhYmVsbGVTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7bG9nTWV0aG9kfSBmcm9tICcuLi9IZWxwZXJzL0RlY29yYXRvcnMnO1xyXG5pbXBvcnQge2xvZ1Byb3BlcnR5fSBmcm9tICcuLi9IZWxwZXJzL0RlY29yYXRvcnMnO1xyXG5pbXBvcnQge2xvZ0NsYXNzfSBmcm9tICcuLi9IZWxwZXJzL0RlY29yYXRvcnMnO1xyXG5cclxuLy9AbG9nQ2xhc3NcclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIHRlY2hub2xvZ3lUeXBlIHtcclxuXHJcblxyXG4gICAgLy8gICAgQGxvZ1Byb3BlcnR5XHJcbiAgICB0ZWNub2xvZ2llOiBUZWNub2xvZ2lhW10gPSBbXTtcclxuXHJcbiAgICBAYmluZGFibGUgdGVjbm9sb2dpYUNvcnJlbnRlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB0YWJlbGxlU2VydmljZTogVGFiZWxsZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRhYmVsbGVTZXJ2aWNlLmdldFRlY25vbG9naWVBdHRpdmUoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlY25vbG9naWUgPSA8VGVjbm9sb2dpYVtdPnJlc3BvbnNlLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19