const natural = require("natural");

// Stemming
//  Porter Stemmer  -s, -ed, -ing
//  Lancaster Stemmer  un- re-  ... -ing, -ly, -ed, -ational, -ization, -fulness
console.log(
  natural.PorterStemmer.tokenizeAndStem(
    "stemming is an act of making a word into its basic format"
  )
);

let words = "runner runs";
console.log(natural.PorterStemmer.stem(words));
console.log(natural.LancasterStemmer.stem("Runner"));

//  .attach() // Old Code ?

natural.PorterStemmer.attach();
console.log("running".stem());

let nounInflector = new natural.NounInflector();

// Plural

console.log(nounInflector.pluralize("book"));

const wordsToInflect = ["matrix", "sheep", "index", "book"];

wordsToInflect.forEach((word) => {
  console.log(nounInflector.pluralize(word));
});

console.log(nounInflector.singularize("words"));

// Verbs
let verbInflector = new natural.PresentVerbInflector();
console.log(verbInflector.pluralize("has"));
console.log(verbInflector.pluralize("becomes"));
console.log(verbInflector.singularize("become"));
