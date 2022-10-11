import Advisor from "./characters/Advisor/Advisor";
import Fighter from "./characters/Fighter/Fighter";
import King from "./characters/King/King";
import Squire from "./characters/Squire/Squire";

const joffrey = new King("Joffrey", "Baratheon", 16, 2);
const jaime = new Fighter("Jaime", "Lannister", 45, "espada", 7);
const daenerys = new Fighter("Daenerys", "Targaryen", 30, "Dragones", 10);
const tyrion = new Advisor("Tyrion", "Lannister", 40, daenerys);
const bronn = new Squire("Bronn", "Blackwater", 54, jaime, 0);

const characters = [joffrey, jaime, daenerys, tyrion, bronn];

export default characters;
