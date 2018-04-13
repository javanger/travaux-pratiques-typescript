class Sejour{
    constructor(private _nom:string, private _prix:number){
    }
    get nom(){
        return this._nom;
    }
    get prix(){
        return this._prix;
    }
}

class SejourService {
    private _sejour:Array<Sejour> = [];

    constructor(){
        let sejour1:Sejour = new Sejour('Tokyo', 1000);
        let sejour2:Sejour = new Sejour('New-York', 2000);
        let sejour3:Sejour = new Sejour('Londre', 1500);

        this._sejour.push(sejour1,sejour2,sejour3);
    }

    findSerjourByName(name:String):Sejour{
        return this._sejour.filter(x => x.nom == name)[0];
    }

}

let sejourService = new SejourService();
console.log(sejourService.findSerjourByName('Tokyo'));