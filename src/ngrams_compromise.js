const nlp = require("compromise");
nlp.extend(require("compromise-stats"));

const doc1 = nlp("The car is behind the garage.");

console.log(doc1.ngrams());
console.log(doc1.unigrams());
console.log(doc1.bigrams());
