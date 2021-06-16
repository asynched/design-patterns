import { King, Knight, Troll } from "./classes.ts";
import { KnifeBehaviour } from "./strategies.ts";

const king = new King();
king.performFight();

const troll = new Troll();
troll.performFight();

const knight = new Knight();
knight.performFight();
knight.setWeaponBehaviour(new KnifeBehaviour());
knight.performFight();
