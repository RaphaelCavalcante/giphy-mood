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
var Observable_1 = require("rxjs/Observable");
var gif_1 = require("../model/gif");
var environment_1 = require("../../app/environment");
require("app/environment");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var GIF_URL = environment_1.environment.gif_url;
var API_KEY = environment_1.environment.api_key;
var GifService = (function () {
    function GifService(http) {
        this.http = http;
    }
    GifService.prototype.handleError = function (error) {
        console.error('An error ocurred', error);
        return Observable_1.Observable.throw(error);
    };
    GifService.prototype.addFilter = function (mood, filter) {
        var url = "" + GIF_URL + mood + "+" + filter + "&api_key=" + API_KEY + "&limit=10";
        return this.http
            .get(url)
            .map(function (response) {
            var gifs = response.json();
            return gifs.data.map(function (gif) { return new gif_1.Gif(gif); });
        }).
            catch(this.handleError);
    };
    GifService.prototype.getByMood = function (mood) {
        var url = "" + GIF_URL + mood + "&api_key=" + API_KEY + "&limit=10";
        return this.http
            .get(url)
            .map(function (response) {
            var gifs = response.json();
            var gifArray = gifs.data;
            return gifArray;
        }).
            catch(this.handleError);
    };
    return GifService;
}());
GifService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GifService);
exports.GifService = GifService;
//# sourceMappingURL=gif.service.js.map