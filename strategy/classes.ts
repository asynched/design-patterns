import { FlyBehaviour, QuackBehaviour } from "./interfaces.ts";
import { FlyNoWay, FlyWithWings, Quack } from "./strategies.ts";

abstract class Duck {
  flyBehaviour: FlyBehaviour;
  quackBehaviour: QuackBehaviour;

  constructor() {}

  public swim(): void {
    console.log("Swimming");
  }

  /**
   * Displays a duck
   */
  public abstract display(): void;

  /**
   * Delegates the fly method to the defined strategy
   */
  public performFly() {
    this.flyBehaviour.fly();
  }

  /**
   * Delegates the quack method to the defined strategy
   */
  public performQuack() {
    this.quackBehaviour.quack();
  }

  /**
   * Sets the flyBehaviour strategy of a given duck
   * @param flyBehaviour Fly behaviour strategy
   */
  public setFlyBehaviour(flyBehaviour: FlyBehaviour) {
    this.flyBehaviour = flyBehaviour;
  }

  /**
   * Sets the quackBehaviour strategy of a given duck
   * @param quackBehaviour Quack behaviour strategy
   */
  public setQuackBehaviour(quackBehaviour: QuackBehaviour) {
    this.quackBehaviour = quackBehaviour;
  }
}

export class MallardDuck extends Duck {
  public constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }

  public display() {
    console.log("🦆");
  }
}

export class ModelDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
    this.quackBehaviour = new Quack();
  }

  public display() {
    console.log("🦆 this is just a model");
  }
}
