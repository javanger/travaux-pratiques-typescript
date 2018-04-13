class Sejour {
  constructor(private _nom: string, private _prix: number) {}

  get nom(): string {
    return this._nom;
  }

  get prix(): number {
    return this._prix;
  }
}

class SejourService {
    private _sejour:Sejour[] = [];
    constructor() {
    this._sejour.push(new Sejour("tahitiHotel", 500));
    this._sejour.push(new Sejour("MexicoHotel", 350));
    this._sejour.push(new Sejour("MontrealHotel", 0));
  }

  findServiceByName(nom: string): Sejour|void {
    return this._sejour.find(s => s.nom == nom);
  }
}

  let test:SejourService = new SejourService();

  console.log(test.findServiceByName("tahitiHotel"));