"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mood_dashboard_component_1 = require("./component/mood-dashboard/mood-dashboard.component");
var mood_search_component_1 = require("./component/mood-search/mood-search.component");
var mood_filter_component_1 = require("./component/mood-filter/mood-filter.component");
var routes = [
    { path: '', redirectTo: '/mood-dashboard', pathMatch: 'full' },
    { path: 'mood-dashboard', component: mood_dashboard_component_1.MoodDashboardComponent },
    { path: 'mood/:mood', component: mood_search_component_1.MoodSearchComponent },
    { path: 'mood/:mood?filter=:filter', component: mood_filter_component_1.MoodFilterComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map