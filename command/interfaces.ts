export interface ICommand<T, R> {
  execute(value: T): R
  undo(value: T): R
}

export type ICalculatorCommand = ICommand<number, number>
