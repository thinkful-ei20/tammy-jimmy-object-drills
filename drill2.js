'use strict';

const obj = {
  foo: 1,
  bar: 'yellow',
  fum: 'maybe',
  quux: true,
  spam: 'SPAM is a trademark',
};

for(let key in obj){
  console.log(`${key}: ${obj[key]}`);
}