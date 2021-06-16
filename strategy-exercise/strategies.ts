import { WeaponBehaviour } from "./interfaces.ts";

export class KnifeBehaviour implements WeaponBehaviour {
  public fight() {
    console.log("🔪");
  }
}

export class BowAndArrowBehaviour implements WeaponBehaviour {
  public fight() {
    console.log("🏹");
  }
}

export class AxeBehaviour implements WeaponBehaviour {
  public fight() {
    console.log("🪓");
  }
}

export class SwordBehaviour implements WeaponBehaviour {
  public fight() {
    console.log("⚔");
  }
}

export class CannotFightBehaviour implements WeaponBehaviour {
  public fight() {
    console.log("I cannot fight! :(");
  }
}
