'use strict';

let people = [
  {
    name: 'Billy',
    jobTitle: 'Sheep hearder',
    boss: 'Rich', 
  },

  {
    name: 'Sally',
    jobTitle: 'Pale Fetcher',
    boss: 'Rich',
  },

  {
    name: 'Rich',
    jobTitle: 'Instructor',
  }
];


people.forEach(function(person){
  let msg = `${person.jobTitle} ${person.name}`; 
  person.boss === undefined ? msg += ' only reports to shareholders' : msg+=` reports to ${person.boss}`;
  console.log(msg);  
}); 