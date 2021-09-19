import { AnimalFactory, Animal } from './abstract-classes.ts'
import { Dog, Cat, Duck } from './classes.ts'

export class RandomAnimalFactory extends AnimalFactory {
  public createAnimal() {
    const randomValue = Math.floor(Math.random() * 2)

    if (randomValue === 0) {
      return new Dog()
    }

    if (randomValue == 1) {
      return new Cat()
    }

    return new Duck()
  }
}

export class BalancedAnimalFactory extends AnimalFactory {
  private counter = 0

  public createAnimal(): Animal {
    if (this.counter === 0) {
      this.counter++
      return new Dog()
    }

    if (this.counter === 1) {
      this.counter++
      return new Cat()
    }

    this.counter = 0
    return new Duck()
  }
}
