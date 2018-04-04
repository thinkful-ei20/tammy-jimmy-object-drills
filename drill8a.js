'use strict';

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },

  findOne: function(query){
    let qKeys = Object.keys(query);
    for(let i = 0; i < this.store.heroes.length; i++){
      
      let match = true;

      for(let j = 0; j < qKeys.length; j++){

        if(!(qKeys[j] in this.store.heroes[i]) || query[qKeys[j]] !== this.store.heroes[i][qKeys[j]]){
          match = false;
        }

      }//end loop thru qKeys

      if(match){
        return this.store.heroes[i];
      }//end if(match)

    }//end loop thru heros
    return null;
  }
};




const exampleQuery0 = {
  //empty object
};//should return Capt America

const exampleQuery1 = {
  squad: 'Avengers',
};//should return Capt America

const exampleQuery2 = {
  id: 3, 
  squad: 'Avengers'
};//should return Sipderman

const exampleQuery3 = {
  id: 6, 
  squad: 'Avengers'
};//should return null

console.log(Database.findOne(exampleQuery0));
console.log(Database.findOne(exampleQuery1));
console.log(Database.findOne(exampleQuery2));
console.log(Database.findOne(exampleQuery3));
