const natural = require("natural");

let A = "sea";
let B = "see";

let C = "meat";
let D = "meet";

function comparePhonetics(a, b) {
  let phonetics = natural.Metaphone;
  if (phonetics.compare(a, b)) {
    console.log(` [ # ] ${a} and ${b} Sound alike`);
  } else {
    console.log(` [ # ] ${a} and ${b} Don't Sound alike`);
  }
}

comparePhonetics(A, B); // bool
comparePhonetics(A, C);
comparePhonetics(D, C);

// Phonetic Formula
// console.log(phonetics. );
