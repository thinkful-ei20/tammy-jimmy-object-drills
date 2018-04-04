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

let checkExistence = function(searchObj, heroObj) {
  //check if all keys in hero obj = serch obj
  let searchKeys = Object.keys(searchObj);
  for (let i = 0; i < searchKeys.length; i ++) {
    let key = searchKeys[i];
    if (searchObj[key] !== heroObj[key]) {
      return false;
    } 
  }
  return true;
};

let findOne = function (arr, query) {
  let theOne = arr.find(function(hero){
    if (checkExistence(query, hero) === true) {
      return hero;
    }
   

    //need to check for value
  });
  // checkExistence (query, obj) {
  //   if query 
  // }
  if (theOne === undefined) {
    return null;
  } else {
    return theOne;
  }
};

console.log(findOne(HEROES, { id: 100 }));