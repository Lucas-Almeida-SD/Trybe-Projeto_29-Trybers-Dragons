import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

class Ranger extends Archetypes {
  private static instances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  public static createdArchetypeInstances(): number {
    return Ranger.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }  
}

export default Ranger;
