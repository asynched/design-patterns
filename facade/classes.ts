import { IConverter } from './interfaces.ts'

export class DollarConverter implements IConverter {
  public call(value: number): number {
    return value * 5.08
  }
}

export class Account {
  public constructor(private value: number) {}

  public getBalance() {
    return this.value
  }

  public getConvertedValue(converter: IConverter) {
    return converter.call(this.value)
  }
}
