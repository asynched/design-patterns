import { iDatabase, iWebserver } from "./interfaces.ts";

export type CoreConfig = {
  database: iDatabase;
  webserver: iWebserver;
};
