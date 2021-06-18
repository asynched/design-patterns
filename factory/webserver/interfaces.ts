export interface iDatabase {
  start(): void;
  stop(): void;
}

export interface iWebserver {
  start(): void;
  stop(): void;
}

export interface iCore {
  start(): void;
  stop(): void;
}

export interface iFactory<T> {
  createInstance(): T;
}
