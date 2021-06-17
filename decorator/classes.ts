abstract class Beverage {
  protected description: string = "Unknown beverage";

  /**
   * ## Getter for the description
   * @returns Description of the given beverage
   */
  public getDescription(): string {
    return this.description;
  }

  /**
   * ## Abstract method to calculate the cost of a given beverage
   * @returns Cost of the given beverage
   */
  public abstract cost(): number;
}

abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;

  public constructor(description: string, beverage: Beverage) {
    super();
    this.description = description;
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + " + " + this.description;
  }
}

export class Expresso extends Beverage {
  public constructor() {
    super();
    this.description = "Expresso";
  }

  public cost(): number {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  public constructor() {
    super();
    this.description = "House blend";
  }

  public cost(): number {
    return 0.89;
  }
}

export class Coffee extends Beverage {
  public constructor() {
    super();
    this.description = "Coffee";
  }

  public cost(): number {
    return 0.99;
  }
}

export class Decaf extends Beverage {
  public constructor() {
    super();
    this.description = "Decafeinated";
  }

  public cost(): number {
    return 1.05;
  }
}

export class Mocha extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super("Mocha", beverage);
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

export class Milk extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super("Milk", beverage);
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

export class Soy extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super("Soy", beverage);
  }

  public cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

export class Cream extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super("Cream", beverage);
  }

  public cost(): number {
    return this.beverage.cost() + 0.1;
  }
}
