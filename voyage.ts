class Sejour{
    constructor(private _nom:string, private _prix:number){
    }

    get nom():String {
        return this._nom;
    } 
    get prix():Number {
        return this._prix;
    }
}

class SejourService{

    private _sejours:Sejour[] = [];

    constructor(){
        let sejour1:Sejour = new Sejour("Paris", 100);
        let sejour2:Sejour = new Sejour("Rio de janeiro", 800);
        let sejour3:Sejour = new Sejour("Tokyo", 500);
        this._sejours.push(sejour1, sejour2, sejour3);
    }

    findSejourByName(name:String):Sejour {
        
        let sejourFind:Sejour = this._sejours.filter(sejour => sejour.nom === name)[0];

        return sejourFind;
    }
}

let sejourService = new SejourService();

console.log(sejourService.findSejourByName("Tokyo"));
