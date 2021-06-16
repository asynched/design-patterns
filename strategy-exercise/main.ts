import { King, Knight, Troll } from "./classes.ts";
import { KnifeBehaviour } from "./strategies.ts";

const king = new King();
king.fight();

const troll = new Troll();
troll.fight();

const knight = new Knight();
knight.fight();
knight.setWeaponBehaviour(new KnifeBehaviour());
knight.fight();
