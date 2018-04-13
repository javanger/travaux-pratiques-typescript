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
        var sejour1 = new Sejour('Paris', 1000);
        var sejour2 = new Sejour('Nantes', 500);
        var sejour3 = new Sejour('Lyon', 100);
        this._sejours.push(sejour1, sejour2, sejour3);
    }
    SejourService.prototype.findSejourByNom = function (nom) {
        return this._sejours.filter(function (x) { return x.nom === nom; })[0];
    };
    return SejourService;
}());
var sejourService = new SejourService();
console.log(sejourService.findSejourByNom('Nantes'));
