class Sejour {
    constructor(private _nom:String, private _prix:number) {

    }

    get nom() {
        return this._nom;
    }

    get prix() {
        return this._prix;
    }

}

class ServiceSejour {
    constructor(private _sejours:Sejour[]) {

    }

    findByName(name:String): Sejour| void {
        return this._sejours.find(s => s.nom == name);      
    }

    get sejours() {
        return this._sejours;
    }
}

let sejours = [
    new Sejour('Sejour 1', 100),
    new Sejour('Sejour 2', 200),
    new Sejour('Sejour 3', 300)
];

let serviceSejour = new ServiceSejour(sejours);

console.log(serviceSejour.findByName('Sejour 1'));