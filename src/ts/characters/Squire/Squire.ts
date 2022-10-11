import Character from "../Character";
import Fighter from "../Fighter/Fighter";
import SquireStructure from "./types";

class Squire extends Character implements SquireStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public whoIsServing: Fighter,
    public pelotismLevel: number
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()}Soy un loser`;
  }
}

export default Squire;
