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
var common_1 = require("@angular/common");
var gif_service_1 = require("../../service/gif.service");
require("rxjs/add/operator/switchMap");
var MoodFilterComponent = (function () {
    function MoodFilterComponent(gifService, route, location, router) {
        this.gifService = gifService;
        this.route = route;
        this.location = location;
        this.router = router;
    }
    MoodFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var filter;
        this.route.queryParams.subscribe(function (params) {
            filter = params.filter;
        });
        this.route.paramMap.switchMap(function (param) {
            return _this.gifService.addFilter(param.get("mood"), filter);
        }).subscribe(function (gifs) { return _this.gifs = gifs; });
    };
    return MoodFilterComponent;
}());
MoodFilterComponent = __decorate([
    core_1.Component({
        selector: 'filter-mood',
        template: '../../../template/home.template.html'
    }),
    __metadata("design:paramtypes", [gif_service_1.GifService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], MoodFilterComponent);
exports.MoodFilterComponent = MoodFilterComponent;
//# sourceMappingURL=mood-filter.component.js.map