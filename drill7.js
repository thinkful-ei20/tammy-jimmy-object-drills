'use strict';

function createCharacter(name,nickname,race,origin,attack,defense) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function() {
      console.log( 
        `${name} is a ${race} from ${origin}.`);
    } ,
    evaluateFight: function(opponent) {
      let x = this.attack - opponent.defense; 
      let y = opponent.attack - this.defense;
      if (x < y) { x = 0;}
      if (y < x) { y = 0;}
      console.log(
        `Your opppnent takes ${x} damage and you recie ${y} damage.`);
    },
  };
}

let characters = [
  createCharacter('Gandalf the While', 'gandalf', 'Wizard','Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo','Hobbit','The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragon son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas', 'legolas', 'Elf','Woodland Realm', 8, 5),
];

console.log(characters);

characters.push(createCharacter ('Ray', 'ray', 'Human', 'Middle Kingdom', 7, 5));

console.log(characters);

let aragonCharacter = characters.find(function (element) {
  return element.nickname === 'aragorn';
});

console.log(aragonCharacter);

aragonCharacter.describe();

let hobbits = characters.filter(function (character) {
  if (character.race === 'Hobbit') {
    return true;
  }
});

console.log(hobbits);

let fighters = characters.filter(function (character) {
  if (character.attack > 5) {
    return true;
  }
});

console.log(fighters);
