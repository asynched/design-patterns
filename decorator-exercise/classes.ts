import { Beverage } from './abstract-classes.ts'

export class Coffee extends Beverage {
  public constructor() {
    super()
    this.description = 'Café'
  }

  public cost(): number {
    return 1
  }
}

export class Decaf extends Beverage {
  public constructor() {
    super()
    this.description = 'Descafeinado'
  }

  public cost(): number {
    return 1.25
  }
}
