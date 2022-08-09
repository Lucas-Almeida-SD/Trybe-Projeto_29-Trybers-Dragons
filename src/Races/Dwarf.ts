import Race from './Race';

class Dwarf extends Race {
  private static instances = 0;

  constructor(
    name: string, 
    dexterity: number,
    private _maxLifePoints: number = 80,
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