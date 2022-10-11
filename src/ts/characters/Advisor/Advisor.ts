import Character from "../Character";
import AdvisorStructure from "./types";

class Advisor extends Character implements AdvisorStructure {
  constructor(
    name: string,
    family: string,
    age: number,
    public whoIsAdvising: Character
  ) {
    super(name, family, age);
  }

  communicate() {
    return `${super.communicate()}No sé por qué, pero creo que voy a morir pronto`;
  }
}

export default Advisor;
