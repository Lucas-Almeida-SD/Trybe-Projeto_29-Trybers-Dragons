import Race from './Race';

class Halfling extends Race {
  private static instances = 0;
  private _maxLifePoints = 60;

  constructor(
    name: string, 
    dexterity: number,
    
  ) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;