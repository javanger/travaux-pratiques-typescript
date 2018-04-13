class Sejour {
  constructor(private _nom: string, private _prix: number) {}
  get nom():string {
    return this._nom;
  }

  set nom(valeur:string) {
    this._nom = valeur;
  }

  get prix():number {
    return this._prix;
  }

  set prix(valeur:number) {
    this._prix = valeur;
  }
}

class SejourService {
  constructor(private _sejours: Sejour[]) {}

  findByName(name: string): Sejour | void {
    return this._sejours.find(s => s.nom.toLowerCase() == name.toLowerCase());
  }
}

let sejours = [
  new Sejour("Martinique", 450),
  new Sejour("Haiti", 300),
  new Sejour("Tailande", 800)
];

let valeur = new SejourService(sejours).findByName("hAiTi");

if(valeur) console.log(valeur);
else console.log("Pas de résultats");
