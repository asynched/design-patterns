import { Beverage, CondimentDecorator } from './abstract-classes.ts'

export class Mocha extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super('Moca', beverage, 0.1)
  }
}

export class Soy extends CondimentDecorator {
  public constructor(beverage: Beverage) {
    super('Soja', beverage, 0.2)
  }
}
