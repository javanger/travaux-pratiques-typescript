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

        let s1 = new Sejour('Sejour 1', 100);
        let s2 = new Sejour('Sejour 2', 200);
        let s3 = new Sejour('Sejour 3', 300);

        _sejours.push(s1);
        _sejours.push(s2);
        _sejours.push(s2);

    }

    findByName(name:String): Sejour| void {
        return this._sejours.find(s => s.nom == name);      
    }

    get sejours() {
        return this._sejours;
    }
}