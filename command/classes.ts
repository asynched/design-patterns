import { ICalculatorCommand } from './interfaces.ts'

export class Calculator {
  public constructor(
    private value: number,
    private commands: ICalculatorCommand[] = []
  ) {}

  public execute(command: ICalculatorCommand) {
    this.commands.push(command)
    this.value = command.execute(this.value)
  }

  public undo() {
    const lastCommand = this.commands.pop()

    if (lastCommand) this.value = lastCommand.undo(this.value)
  }

  public log() {
    console.log(`[CALCULATOR]: Current value is: ${this.value}`)
  }
}
