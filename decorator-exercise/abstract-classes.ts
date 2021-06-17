type BeverageSize = "tall" | "grande" | "venti";

export abstract class Beverage {
  protected description: string = "Unknown beverage";
  protected size: BeverageSize = "grande";

  public getDescription(): string {
    return this.description;
  }

  public getSize(): BeverageSize {
    return this.size;
  }

  public setSize(size: BeverageSize) {
    this.size = size;
  }

  public abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage;
  protected condimentCost: number;

  public constructor(
    description: string,
    beverage: Beverage,
    condimentCost: number
  ) {
    super();
    this.description = description;
    this.beverage = beverage;
    this.condimentCost = condimentCost;
  }

  protected getAditionalSizeCost(): number {
    let aditionalCost = 0;

    switch (this.beverage.getSize()) {
      case "grande":
        aditionalCost += 0.1;
        break;
      case "tall":
        aditionalCost += 0.15;
        break;
      case "venti":
        aditionalCost += 0.2;
        break;
    }

    return aditionalCost;
  }

  public cost(): number {
    const cost =
      this.beverage.cost() + this.condimentCost + this.getAditionalSizeCost();

    return cost;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + " + " + this.description;
  }

  public setSize(size: BeverageSize) {
    this.beverage.setSize(size);
  }
}
