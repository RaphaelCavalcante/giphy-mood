"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var moods = [
    'Happy',
    'Sad',
    'Silly',
    'Stressed',
    'Frustrated',
    'Peaceful',
    'Angry',
    'Hungry',
    'Sleepy',
    'Good'
];
var MoodDashboardComponent = (function () {
    function MoodDashboardComponent() {
        this.array_moods = moods;
    }
    return MoodDashboardComponent;
}());
MoodDashboardComponent = __decorate([
    core_1.Component({
        selector: 'mood-dashboard',
        templateUrl: '../../../template/mood-dashboard.template.html',
    })
], MoodDashboardComponent);
exports.MoodDashboardComponent = MoodDashboardComponent;
//# sourceMappingURL=mood-dashboard.component.js.map