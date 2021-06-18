import { iDatabase, iCore, iWebserver } from "./interfaces.ts";
import { DatabaseFactory, WebserverFactory } from "./factories.ts";
import { CoreConfig } from "./types.ts";

export class Database implements iDatabase {
  public start() {
    console.log("> [INITIALIZING DATABASE]");
    console.log("> [MIGRATING THE DABABASE]");
    console.log("> [DATABASE HAS STARTED]");
  }

  public stop() {
    console.log("> [SHUTTING DOWN THE DATABASE]");
    console.log("> [DATABASE SUCCESSFULLY STOPPED]");
  }
}

export class Webserver implements iWebserver {
  public start() {
    console.log("> [INITIALIZING THE WEBSERVER]");
    console.log("> [CONNECTING TO THE DATABASE]");
    console.log("> [SUCCESFULLY CONNECTED]");
    console.log("> [WEBSERVER HAS STARTED]");
  }

  public stop() {
    console.log("> [SHUTTING DOWN THE WEBSERVER]");
    console.log("> [DISCONNECTING FROM THE DATABASE]");
    console.log("> [WEBSERVER SUCCESSFULLY STOPPED]");
  }
}

export class Core implements iCore {
  private database: iDatabase;
  private webserver: iWebserver;

  public constructor(database: iDatabase, webserver: iWebserver) {
    this.database = database;
    this.webserver = webserver;
  }

  public start() {
    console.log("> [INITIALIZING WEBSERVER CORE]");
    this.database.start();
    this.webserver.start();
    console.log("> [WEBSERVER CORE STARTED]");
  }

  public stop() {
    console.log("> [SHUTTING DOWN WEBSERVER CORE]");
    this.webserver.stop();
    this.database.stop();
    console.log("> [WEBSERVER CORE STOPPED]");
  }

  public static createCore(coreConfig?: CoreConfig) {
    if (!coreConfig) {
      const databaseFactory = new DatabaseFactory();
      const webserverFactory = new WebserverFactory();

      const database = databaseFactory.createInstance();
      const webserver = webserverFactory.createInstance();

      return new Core(database, webserver);
    }

    const { database, webserver } = coreConfig;

    return new Core(database, webserver);
  }
}
