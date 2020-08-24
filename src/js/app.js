import Team from './team'

const bow = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }
  
  const magic = {
    name: 'Маг',
    type: 'Magician',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10
  }
let t = new Team;

let m = t.members;
m.push(bow);
m.push(magic);


  function* teamGen() {
    for (let i=0; i< m.length; i++) {
    yield m[i]
  }
  };

let b = teamGen()

b.next()
b.next()
b.next()

