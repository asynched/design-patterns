import { WeaponBehaviour } from './interfaces.ts'
import {
  CannotFightBehaviour,
  AxeBehaviour,
  SwordBehaviour,
} from './strategies.ts'

abstract class Character {
  weaponBehaviour: WeaponBehaviour

  public fight() {
    this.weaponBehaviour.useWeapon()
  }

  public setWeaponBehaviour(weaponBehaviour: WeaponBehaviour) {
    this.weaponBehaviour = weaponBehaviour
  }
}

export class Queen extends Character {
  constructor() {
    super()
    this.weaponBehaviour = new CannotFightBehaviour()
  }
}

export class King extends Character {
  constructor() {
    super()
    this.weaponBehaviour = new CannotFightBehaviour()
  }
}

export class Troll extends Character {
  constructor() {
    super()
    this.weaponBehaviour = new AxeBehaviour()
  }
}

export class Knight extends Character {
  constructor() {
    super()
    this.weaponBehaviour = new SwordBehaviour()
  }
}
