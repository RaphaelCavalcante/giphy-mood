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
var gif_service_1 = require("../../service/gif.service");
var moods = [
    "Happy",
    "Sad",
    "Silly",
    "Stressed",
    "Frustrated",
    "Peaceful",
    "Angry",
    "Hungry",
    "Sleepy",
    "Good"
];
var MoodDashboardComponent = (function () {
    function MoodDashboardComponent(gifservice) {
        this.gifservice = gifservice;
        this.array_moods = moods;
    }
    MoodDashboardComponent.prototype.ngOnInit = function () {
        console.log(this.gifservice.getGifsByMood("mood"));
    };
    return MoodDashboardComponent;
}());
MoodDashboardComponent = __decorate([
    core_1.Component({
        selector: 'mood-dashboard',
        templateUrl: '../../../template/mood-dashboard.template.html',
    }),
    __metadata("design:paramtypes", [gif_service_1.GifService])
], MoodDashboardComponent);
exports.MoodDashboardComponent = MoodDashboardComponent;
//# sourceMappingURL=mood-dashboard.component.js.map