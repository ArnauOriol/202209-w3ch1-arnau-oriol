import CharacterStructure from "./CharacterStructure.js";

class Character implements CharacterStructure {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  show: string;

  constructor(
    public characterName: string,
    public familyName: string,
    public characterAge: number
  ) {
    this.name = characterName;
    this.family = familyName;
    this.age = characterAge;
  }
}

export default Character;
