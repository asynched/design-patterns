import { Mocha, Soy } from "./decorators.ts";
import { Coffee, Decaf } from "./classes.ts";

const coffee = new Coffee();
const coffeeWithMocha = new Mocha(coffee);

coffeeWithMocha.setSize("tall");

const coffeeWithDoubleMocha = new Mocha(coffeeWithMocha);

console.log(coffeeWithDoubleMocha.getDescription());
console.log(coffeeWithDoubleMocha.cost());

const decaf = new Decaf();
const decafWithMocha = new Mocha(decaf);
const decafWithMochaAndSoy = new Soy(decafWithMocha);

decafWithMochaAndSoy.setSize("venti");

console.log(decafWithMochaAndSoy.getDescription());
console.log(decafWithMochaAndSoy.cost());
