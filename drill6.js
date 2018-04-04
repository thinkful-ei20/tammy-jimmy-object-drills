'use strict';

const chiperExample = {
  a : 2,
  b : 3,
  c : 4,
  d : 5,
};

function decode(word, cipher) {
  let letter = word[0];
  if(letter in cipher){
    return word[cipher[letter]-1];
  } else {
    return '_';
  }
}


function decodeWords(str, cipher){
  const words = str.split(' ');
  let sentence = '';
  for (let i = 0; i < words.length; i++) {
    sentence += decode(words[i], cipher);
  }
  return sentence;
}

console.log(decodeWords('craft block argon meter bells brown croon droop', chiperExample));