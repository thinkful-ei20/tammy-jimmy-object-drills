'use strict';

let people = [
  {
    name: 'Billy',
    jobTitle: 'Sheep hearder', 
  },

  {
    name: 'Sally',
    jobTitle: 'Pale Fetcher',
  },

  {
    name: 'Rich',
    jobTitle: 'Instructor',
  }
];

people.forEach(person => console.log(`Name:${person.name} Job title: ${person.jobTitle}`));