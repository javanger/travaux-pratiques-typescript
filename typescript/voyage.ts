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

class SejourService{
    private _sejours:Sejour[] = [];
    constructor(){
        let sejour1:Sejour = new Sejour('Paris', 1000);
        let sejour2:Sejour = new Sejour('Nantes', 500);
        let sejour3:Sejour = new Sejour('Lyon', 100);

        this._sejours.push(sejour1,sejour2,sejour3);
    }

findSejourByNom(nom:string):Sejour {

    return this._sejours.filter(x=>x.nom === nom )[0];
}
}

let sejourService = new SejourService();
console.log(sejourService.findSejourByNom('Nantes'));

