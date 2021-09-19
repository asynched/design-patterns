import { Account, DollarConverter } from './classes.ts'

class Application {
  public static main(): void {
    const account = new Account(50.4)
    const accountBalanceInDollars = account.getConvertedValue(
      new DollarConverter()
    )
    console.log(accountBalanceInDollars)
  }
}

Application.main()
