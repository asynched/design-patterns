export abstract class Animal {
  type = 'Unknown type'
  name = 'Unknown name'

  public constructor(type: string, name: string) {
    this.type = type
    this.name = name
  }
}

export abstract class AnimalFactory {
  public abstract createAnimal(): Animal
}
