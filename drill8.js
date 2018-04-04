'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];



function findOne(arr, query){
  let qKeys = Object.keys(query); 
  for(let i = 0; i < arr.length; i++){
    
    //assume arr[i] is a match for the query, change or keep assumption below
    let match = true;

    //loop thru the keys in the query to compare to arr[i]
    for(let j = 0; j < qKeys.length; j++){ 
      
      //if the current query key isn't in arr[i] or the values don't match then its not a match, match = false
      if(!(qKeys[j] in arr[i]) || query[qKeys[j]] !== arr[i][qKeys[j]]){
        match = false;
      }

    }//end loop thru qKeys
    
    //If we havent proven our assumption that arr[i] is a match wrong then return it
    if(match){
      return arr[i];
    }//end if(match)

  }//end loop thru arr of Heros

  return null;
}

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

console.log(findOne(HEROES, exampleQuery0));
console.log(findOne(HEROES, exampleQuery1));
console.log(findOne(HEROES, exampleQuery2));
console.log(findOne(HEROES, exampleQuery3));