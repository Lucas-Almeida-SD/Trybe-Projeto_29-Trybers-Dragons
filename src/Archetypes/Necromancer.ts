import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Necromancer extends Archetypes {
  private static instances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Necromancer.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }  
}

export default Necromancer;
