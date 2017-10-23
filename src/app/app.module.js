"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var mood_dashboard_component_1 = require("./component/mood-dashboard/mood-dashboard.component");
var mood_search_component_1 = require("./component/mood-search/mood-search.component");
var mood_filter_component_1 = require("./component/mood-filter/mood-filter.component");
var gif_service_1 = require("./service/gif.service");
var forbidden_chars_directive_1 = require("./validator/forbidden-chars.directive");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_2.FormsModule, http_1.HttpModule, app_routing_module_1.AppRoutingModule, forms_2.FormsModule, forms_1.ReactiveFormsModule],
        declarations: [
            app_component_1.AppComponent,
            mood_dashboard_component_1.MoodDashboardComponent,
            mood_search_component_1.MoodSearchComponent,
            mood_filter_component_1.MoodFilterComponent,
            forbidden_chars_directive_1.ForbiddenValidatorDirective
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [gif_service_1.GifService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map