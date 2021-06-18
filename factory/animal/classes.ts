import { Animal } from "./abstract-classes.ts";

export class Dog extends Animal {
  public constructor() {
    super("Mammal", "Dog");
  }
}

export class Cat extends Animal {
  public constructor() {
    super("Mammal", "Cat");
  }
}

export class Duck extends Animal {
  public constructor() {
    super("Bird", "Duck");
  }
}
