import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Mage extends Archetypes {
  private static instances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Mage.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }  
}

export default Mage;
