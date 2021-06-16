import { WeaponBehaviour } from "./interfaces.ts";

export class KnifeBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log("🔪");
  }
}

export class BowAndArrowBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log("🏹");
  }
}

export class AxeBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log("🪓");
  }
}

export class SwordBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log("⚔");
  }
}

export class CannotFightBehaviour implements WeaponBehaviour {
  public useWeapon() {
    console.log("I cannot useWeapon! :(");
  }
}
