import { MallardDuck, ModelDuck } from "./classes.ts";
import { FlyRocketPowered } from "./strategies.ts";

const mallardDuck = new MallardDuck();

mallardDuck.display();
mallardDuck.performFly();
mallardDuck.performQuack();

/**
 * O pato modelo não consegue voar, uma vez que
 * na instanciação da sua classe a estratégia
 * utilizada é a `FlyNoWay`. Entretanto, podemos
 * alterar a estratégia de vôo em tempo de execução
 * utilizando o método setFlyBehaviour da classe
 * pai (Duck).
 */
const modelDuck = new ModelDuck();

modelDuck.display();
modelDuck.performFly();
modelDuck.setFlyBehaviour(new FlyRocketPowered());
modelDuck.performFly();
