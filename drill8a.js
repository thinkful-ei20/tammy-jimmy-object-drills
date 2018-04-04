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

        if(!(qKeys[j] in this.store.heroes[i])){
          match = false;
        }else if(query[qKeys[j]] !== this.store.heroes[i][qKeys[j]]){
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



console.log(Database.findOne({ id: 2 }));