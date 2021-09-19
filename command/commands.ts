import { ICalculatorCommand } from './interfaces.ts'

export class AddCommand implements ICalculatorCommand {
  public constructor(private value: number) {}

  execute(value: number) {
    return value + this.value
  }

  undo(value: number) {
    return value - this.value
  }
}

export class SubtractCommand implements ICalculatorCommand {
  public constructor(private value: number) {}

  execute(value: number) {
    return value - this.value
  }

  undo(value: number) {
    return value + this.value
  }
}

export class CommandContext implements ICalculatorCommand {
  private commands: ICalculatorCommand[]

  public constructor(...commands: ICalculatorCommand[]) {
    this.commands = commands
  }

  public execute(value: number) {
    return this.commands.reduce(
      (currentValue, command) => command.execute(currentValue),
      value
    )
  }

  public undo(value: number) {
    return this.commands
      .reverse()
      .reduce((currentValue, command) => command.undo(currentValue), value)
  }
}
