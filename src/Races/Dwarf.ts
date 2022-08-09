import Race from './Race';

class Dwarf extends Race {
  private static instances = 0;
  private _maxLifePoints = 80;

  constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Dwarf.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;