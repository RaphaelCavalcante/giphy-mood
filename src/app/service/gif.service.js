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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var GifService = (function () {
    function GifService(http) {
        this.http = http;
        this.gif_url = 'http://api.giphy.com/v1/gifs/search?q=';
        this.api_key = 'Kb9VU3XzdpY8K9hKRblhYb7bSjeSG0kK';
    }
    GifService.prototype.handleError = function (error) {
        console.error('An error ocurred', error);
        return Promise.reject(error.message || error);
    };
    GifService.prototype.addFilter = function (mood, filter) {
        var url = "" + this.gif_url + mood + "+" + filter + "&api_key=" + this.api_key + "&limit=10";
        return this.http
            .get(url).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    GifService.prototype.getByMood = function (mood) {
        var url = "" + this.gif_url + mood + "&api_key=" + this.api_key + "&limit=10";
        console.log(url);
        var gifs = this.http
            .get(url).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
        console.log(gifs[0].slug);
        return gifs;
    };
    return GifService;
}());
GifService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GifService);
exports.GifService = GifService;
//# sourceMappingURL=gif.service.js.map