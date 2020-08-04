import Bowman from './bowman';
import Swordsman from './swordsman';
import Magician from './magician';
import Team from './team';

const fellowship = new Team();
const pack = fellowship.members;
let aragorn = new Swordsman('Арагорн'),
legolas = new Bowman('Леголас'),
gandalf = new Magician('Гэндальф');
pack.add(gandalf);
pack.add(aragorn);
pack.add(legolas)

export { fellowship, pack, aragorn, gandalf, legolas }