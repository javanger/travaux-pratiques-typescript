class Sejour {
    constructor(private _nom:string, private _prix:number){
    }

    get nom() : string{
        return this._nom
    }

    get prix() : number{
        return this._prix
    }

}

class SejourService{

    private _sejour:Sejour[] = []

    constructor(){
        this._sejour.push(new Sejour("France", 1500))
        this._sejour.push(new Sejour("Angleterre", 2000))
        this._sejour.push(new Sejour("Etats Unis", 3000))
    }

    findByName(nom:string): Sejour{
        let sejour : Sejour = this._sejour.filter(s => s.nom == nom)[0]
        return sejour
    }
}

let sejour = new SejourService()

console.log(sejour.findByName("Angleterre"))
