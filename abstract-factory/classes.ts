import { IOffensiveEntity } from './interfaces.ts'

export abstract class Enemy implements IOffensiveEntity {
  public constructor(protected name: string, protected emoji: string) {}

  public attack() {
    console.log(`[${this.emoji} - ${this.name}]: ATTACKING!`)
  }
}

export abstract class MainCharacter implements IOffensiveEntity {
  public constructor(protected name: string, protected emoji: string) {}
  public sayCatchPhrase() {
    console.log(`[${this.emoji} - ${this.name}]: I'm going to save the world!`)
  }

  public attack() {
    console.log(`[${this.emoji} - ${this.name}]: ATTACKING!`)
  }
}

export abstract class GameFactory {
  public abstract getMainCharacter(): MainCharacter
  public abstract getEnemy(): Enemy
}
