import { IOffensiveEntity } from './interfaces.ts'
import { GameFactory } from './classes.ts'
import { PreHistoryGameFactory, SpaceGameFactory } from './game.ts'

class GameApplication {
  public static main(factory: GameFactory) {
    const character = factory.getMainCharacter()
    const enemy = factory.getEnemy()

    GameApplication.attack(character)
    GameApplication.attack(enemy)
  }

  public static attack(entity: IOffensiveEntity) {
    entity.attack()
  }
}

GameApplication.main(new PreHistoryGameFactory())
GameApplication.main(new SpaceGameFactory())
