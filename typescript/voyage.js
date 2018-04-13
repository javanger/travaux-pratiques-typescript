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
        this._sejour.push(new Sejour("tahitiHotel", 500));
        this._sejour.push(new Sejour("MexicoHotel", 350));
        this._sejour.push(new Sejour("MontrealHotel", 0));
    }
    SejourService.prototype.findServiceByName = function (nom) {
        return this._sejour.find(function (s) { return s.nom == nom; });
    };
    return SejourService;
}());
var test = new SejourService();
console.log(test.findServiceByName("tahitiHotel"));
