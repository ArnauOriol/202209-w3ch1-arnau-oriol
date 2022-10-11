import Character from "../Character";
import FigtherStructure from "./types";

class Fighter extends Character implements FigtherStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public weaponUsed: string,
    public dexterity: number
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()}Primero pego y luego pregunto`;
  }
}

export default Fighter;
