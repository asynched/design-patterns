type BeverageSize = 'tall' | 'grande' | 'venti'

export abstract class Beverage {
  protected description = 'Unknown beverage'
  protected size: BeverageSize = 'grande'

  public getDescription(): string {
    return this.description
  }

  public getSize(): BeverageSize {
    return this.size
  }

  public setSize(size: BeverageSize) {
    this.size = size
  }

  public abstract cost(): number
}

export abstract class CondimentDecorator extends Beverage {
  protected beverage: Beverage
  protected condimentCost: number

  public constructor(
    description: string,
    beverage: Beverage,
    condimentCost: number
  ) {
    super()
    this.description = description
    this.beverage = beverage
    this.condimentCost = condimentCost
  }

  protected additionalSizeCost(): number {
    let additionalCost = 0

    switch (this.beverage.getSize()) {
      case 'grande':
        additionalCost += 0.1
        break
      case 'tall':
        additionalCost += 0.15
        break
      case 'venti':
        additionalCost += 0.2
        break
    }

    return additionalCost
  }

  public cost(): number {
    const cost =
      this.beverage.cost() + this.condimentCost + this.additionalSizeCost()

    return cost
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ' + ' + this.description
  }

  public setSize(size: BeverageSize) {
    this.beverage.setSize(size)
  }
}
