import Character from "../Character.js";
import KingStructure from "./types.js";

class King extends Character implements KingStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public yearsRuled: number
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()}Vais a morir todos!`;
  }
}

export default King;
