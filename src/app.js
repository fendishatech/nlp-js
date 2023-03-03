const compromise = require("compromise");

const corpus =
  "Okay, everybody relax. Relax. This is not even a date. It's not. It's just two people going out to dinner and - not having sex.";

const doc = compromise(corpus);

// MATCH IN TEXT
// console.log(doc.match("the #Verb of relax").text());

// PARTS OF SPEECH

// console.log(doc.verbs().text());
// console.log(doc.verbs().json());
const sentences = doc.sentences().json();
sentences.forEach((sentence) => {
  console.log(sentence.terms);
});

// console.log(doc.nouns().text());
// console.log(doc.verbs().toPastTense().json());
