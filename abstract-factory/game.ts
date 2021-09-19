import { MainCharacter, GameFactory, Enemy } from './classes.ts'

class SpaceGameMainCharacter extends MainCharacter {}
class SpaceGameEnemy extends Enemy {}
export class SpaceGameFactory extends GameFactory {
  public getMainCharacter(): MainCharacter {
    return new SpaceGameMainCharacter('HERO', '👨‍🚀')
  }

  public getEnemy(): Enemy {
    return new SpaceGameEnemy('ENEMY', '👾')
  }
}

class PreHistoryMainCharacter extends MainCharacter {}
class PreHistoryEnemy extends Enemy {}
export class PreHistoryGameFactory extends GameFactory {
  public getMainCharacter(): MainCharacter {
    return new PreHistoryMainCharacter('HERO', '🍖')
  }

  public getEnemy(): Enemy {
    return new PreHistoryEnemy('ENEMY', '🦖')
  }
}
