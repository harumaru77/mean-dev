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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var car_service_1 = require("../shared/car.service");
/**
 * Created by kitri12 on 2017-05-17.
 */
var CarPartsComponent = (function () {
    function CarPartsComponent(carService) {
        this.carService = carService;
        this.heroes = [];
    }
    CarPartsComponent.prototype.btnClicked = function () {
        var _this = this;
        //this.carService.getCars().subscribe(data => this.heroes = data);
        this.carService.getCarsWithPromise().then(function (data) { return _this.heroes = data; });
    };
    CarPartsComponent.prototype.postClicked = function () {
        var _this = this;
        this.carService.getNewHero().subscribe(function (data) { return _this.heroes = data; });
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        template: "\n    <h2>My Heroes \uD504\uB77C\uBBF8\uC2A4 \uBC84\uC804</h2>\n    <div *ngIf=\"heroes\">\n      <ul *ngFor=\"let hero of heroes\">\n        <li>{{hero.id}} \uBC88 {{hero.name}} \uC601\uC6C5</li>\n      </ul>\n    </div>\n    <button type=\"button\" (click)=\"btnClicked()\">\uB20C\uB7EC\uC8FC\uC138\uC694</button>\n    <button type=\"button\" (click)=\"postClicked()\">\uD3EC\uC2A4\uD2B8\uBC29\uC2DD</button>\n  ",
    }),
    __metadata("design:paramtypes", [car_service_1.CarSerice])
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map