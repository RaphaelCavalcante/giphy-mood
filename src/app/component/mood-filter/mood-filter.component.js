"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var forbidden_chars_directive_1 = require("../../validator/forbidden-chars.directive");
var gif_service_1 = require("../../service/gif.service");
var MoodFilterComponent = (function () {
    function MoodFilterComponent(location, router, route, gifService) {
        this.location = location;
        this.router = router;
        this.route = route;
        this.gifService = gifService;
        this.filter_field = { filter_txt: '' };
    }
    MoodFilterComponent.prototype.goBack = function () {
        this.location.back();
    };
    MoodFilterComponent.prototype.addFilter = function (filter) {
        var para = this.route.paramMap["source"]["_value"];
        this.router.navigate(['/mood/' + para["mood"] + "/" + filter]);
    };
    MoodFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm = new forms_1.FormGroup({
            'filter_field': new forms_1.FormControl(this.filter_field, [
                forbidden_chars_directive_1.forbiddenCharValidator(/teste/i)
            ])
        });
        this.route.paramMap.switchMap(function (param) { return _this.gifService.addFilter(param.get("mood"), param.get("filter")); })
            .subscribe(function (gifs) { _this.gifs = gifs; });
    };
    return MoodFilterComponent;
}());
MoodFilterComponent = __decorate([
    core_1.Component({
        selector: 'mood-filter',
        templateUrl: '../../../template/mood-search.template.html'
    }),
    __metadata("design:paramtypes", [common_1.Location, router_1.Router, router_1.ActivatedRoute, gif_service_1.GifService])
], MoodFilterComponent);
exports.MoodFilterComponent = MoodFilterComponent;
//# sourceMappingURL=mood-filter.component.js.map