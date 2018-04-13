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
        this._sejour = [];
        this._sejour.push(new Sejour("France", 1500));
        this._sejour.push(new Sejour("Angleterre", 2000));
        this._sejour.push(new Sejour("Etats Unis", 3000));
    }
    SejourService.prototype.findByName = function (nom) {
        var sejour = this._sejour.filter(function (s) { return s.nom == nom; })[0];
        return sejour;
    };
    return SejourService;
}());
var sejour = new SejourService();
console.log(sejour.findByName("Angleterre"));
