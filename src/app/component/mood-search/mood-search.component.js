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
var gif_service_1 = require("../../service/gif.service");
var forbidden_chars_directive_1 = require("../../validator/forbidden-chars.directive");
require("rxjs/add/operator/switchMap");
var MoodSearchComponent = (function () {
    function MoodSearchComponent(gifService, route, location, router) {
        this.gifService = gifService;
        this.route = route;
        this.location = location;
        this.router = router;
        this.filter = { name: '' };
    }
    MoodSearchComponent.prototype.goBack = function () {
        this.location.back();
    };
    MoodSearchComponent.prototype.addFilter = function (filterStr) {
        var para = this.route.paramMap['source']['_value'];
        this.router.navigate(['/mood/' + para['mood'] + '/' + filterStr]);
    };
    MoodSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filterForm = new forms_1.FormGroup({
            'filterControl': new forms_1.FormControl(this.filter.name, [
                forbidden_chars_directive_1.forbiddenCharValidator(/^[\\\/!@#\$%\^\&*\)\(+=._-]/i)
            ])
        });
        this.route.paramMap.switchMap(function (param) { return _this.gifService.getByMood(param.get('mood')); })
            .subscribe(function (gifs) { return _this.gifs = gifs; });
    };
    Object.defineProperty(MoodSearchComponent.prototype, "filterControl", {
        get: function () {
            return this.filterForm.get('filterControl');
        },
        enumerable: true,
        configurable: true
    });
    return MoodSearchComponent;
}());
MoodSearchComponent = __decorate([
    core_1.Component({
        selector: 'search-mood',
        templateUrl: '../../../template/mood-search.template.html'
    }),
    __metadata("design:paramtypes", [gif_service_1.GifService,
        router_1.ActivatedRoute,
        common_1.Location,
        router_1.Router])
], MoodSearchComponent);
exports.MoodSearchComponent = MoodSearchComponent;
//# sourceMappingURL=mood-search.component.js.map