import { FlyBehaviour, QuackBehaviour } from './interfaces.ts'

export class FlyWithWings implements FlyBehaviour {
  public fly(): void {
    console.log('Flying!')
  }
}

export class FlyNoWay implements FlyBehaviour {
  public fly(): void {
    console.log('Not flying. :(')
  }
}

export class FlyRocketPowered implements FlyBehaviour {
  public fly(): void {
    console.log('Flying with rockets! 🚀')
  }
}

export class Quack implements QuackBehaviour {
  quack(): void {
    console.log('Quack!')
  }
}

export class Squeak implements QuackBehaviour {
  quack(): void {
    console.log('Squeak!')
  }
}

class MuteQuack implements QuackBehaviour {
  quack(): void {}
}
