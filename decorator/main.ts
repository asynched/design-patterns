import { Coffee, Decaf, Milk, Mocha, Cream, Soy } from "./classes.ts";

const coffee = new Coffee();
const coffeeWithMilk = new Milk(coffee);
const coffeeWithMilkAndMocha = new Mocha(coffeeWithMilk);

console.log(coffeeWithMilkAndMocha.getDescription());
console.log(coffeeWithMilkAndMocha.cost());

const decaf = new Decaf();
const decafWithCream = new Cream(decaf);
const decafWithCreamAndSoy = new Soy(decafWithCream);

console.log(decafWithCreamAndSoy.getDescription());
console.log(decafWithCreamAndSoy.cost());
