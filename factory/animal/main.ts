// The book's example was 💩 so I did the example
// in this video: https://www.youtube.com/watch?v=EcFVTgRHJLM

import { BalancedAnimalFactory, RandomAnimalFactory } from "./factories.ts";

const balancedAnimalFactory = new BalancedAnimalFactory();
const randomAnimalFactory = new RandomAnimalFactory();
const RANGE = 12;

console.log("[BALANCED ANIMAL FACTORY]");
for (let _ = 0; _ < RANGE; _++) {
  const balancedAnimal = balancedAnimalFactory.createAnimal();
  console.log("[BALANCED]: ", balancedAnimal);
}

console.log("\n[RANDOM ANIMAL FACTORY]");
for (let _ = 0; _ < RANGE; _++) {
  const randomAnimal = randomAnimalFactory.createAnimal();
  console.log("[RANDOM]: ", randomAnimal);
}
