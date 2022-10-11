interface CharacterStructure {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  show: string;
  communicate: () => string;
  die: () => void;
}

export default CharacterStructure;
