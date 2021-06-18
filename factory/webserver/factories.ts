import { iFactory, iDatabase, iWebserver } from "./interfaces.ts";
import { Database, Webserver } from "./classes.ts";

export class DatabaseFactory implements iFactory<iDatabase> {
  createInstance() {
    return new Database();
  }
}

export class WebserverFactory implements iFactory<iWebserver> {
  createInstance() {
    return new Webserver();
  }
}
