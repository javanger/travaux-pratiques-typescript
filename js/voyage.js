"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        var sejour1 = new Sejour("Paris", 100);
        var sejour2 = new Sejour("Rio de janeiro", 800);
        var sejour3 = new Sejour("Tokyo", 500);
        this._sejours.push(sejour1, sejour2, sejour3);
    }
    SejourService.prototype.findSejourByName = function (name) {
        var sejourFind = this._sejours.filter(function (sejour) { return sejour.nom === name; })[0];
        return sejourFind;
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findSejourByName("Tokyo"));
