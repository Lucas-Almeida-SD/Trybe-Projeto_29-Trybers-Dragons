import { EnergyType } from '../Energy';

abstract class Archetypes {
  private _special = 0;
  private _cost = 0;

  constructor(private _name: string) {}

  get name(): string { return this.name; }
  get special(): number { return this._special; }
  get cost(): number { return this._cost; }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetypes;