'use strict';

function createCharacter(nm, nknm, rc, orig, atk, def){
  const character = {
    name: nm,
    nickname: nknm,
    race: rc,
    origin: orig,
    attack: atk,
    defense: def,
    describe: function(){
      console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
    },
    evaluateFight: function(character){
      let x = this.attack - character.defense; //damage to opponent
      let y = character.attack - this.defense; // damage to this
      if(x < 0){x = 0;}
      if(y < 0){y = 0;}      
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    } 
  };
  return character;
}

let characters = [];
characters.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5));
characters.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunedain', 6, 8));
characters.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2));
characters.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1));
characters.push(createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6));

characters.push(createCharacter('Arwen Undomiel', 'arwin', 'Half-Elf', 'Rivendell', 7, 2));


characters.find(function(character) {
  return character.nickname === 'aragorn';
}).describe();

let hobbits = characters.filter(function(character){
  return character.race === 'Hobbit';
});
//console.log(hobbits);

let goodFighters = characters.filter(function(character){
  return character.attack > 5;
});
//console.log(goodFighters);




