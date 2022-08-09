import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Warrior extends Archetypes {
  private static instances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Warrior.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }  
}

export default Warrior;
