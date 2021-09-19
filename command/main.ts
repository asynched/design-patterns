import { Calculator } from './classes.ts'
import { AddCommand, SubtractCommand, CommandContext } from './commands.ts'

const calculator = new Calculator(10)

const addCommand = new AddCommand(5)
const subtractCommand = new SubtractCommand(10)
const commandContext = new CommandContext(addCommand, subtractCommand)

calculator.execute(commandContext)
calculator.log()
calculator.undo()
calculator.log()
