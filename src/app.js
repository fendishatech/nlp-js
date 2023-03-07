// const nlp = require("compromise");
// const datePlugin = require("compromise-dates");

// nlp.plugin(datePlugin);

// const nlp = require("compromise");
// nlp.extend(require("compromise-dates"));
// const sentence = nlp("This is a book and that a table.");
// const sentences =
//   "Okay, jack from new york relax. Relax. This is not even a date. It's not. It's just two people going out to dinner and - not having sex.";

// const doc = nlp(sentence);
// const doc = nlp(sentences);

// Intro
// console.log(doc.data()); // data
// console.log(doc.data()[0].terms); // terms

// SENTENCES
// console.log(doc.sentences()); //
// console.log(doc.sentences().data()); //
// console.log(doc.sentences().text()); //
// sentences.forEach((sentence) => {
//   console.log(sentence.terms);
// });

// TOKENIZE
// console.log(doc.sentences().terms()); //
// console.log(doc.sentences().terms().out("json")); // => token export to html, array, json

// PARTS OF SPEECH
// console.log(doc.nouns().text()); //
// console.log(doc.verbs().text()); //
// CHANGING NUMBERS, TENSE, WORD CASE
// console.log(doc.nouns().toPlural().toUpperCase().data()); //
// console.log(doc.verbs().toPastTense().toUpperCase().data()); //

// Entities NER   => People, places, organizations
// console.log(doc.topics().data(), doc.topics().data()[0].terms); //
// console.log(doc.topics().people().data()); // People
// console.log(doc.people().data()); // People
// console.log(doc.places().text()); // People
// console.log(doc.organizations().text()); // People

// MATCH IN TEXT
// console.log(doc.match("the #Verb of relax").text());

/* --------------------------------- Numbers -------------------------------- */
// word to number, ordinal,
// const doc = nlp("sixty nine");
// console.log(doc.values().text());
// console.log(doc.values().toOrdinal().text());
// console.log(doc.values().toNumber().text());
// console.log(doc.values().toOrdinal().text());
// // to cardinal
// console.log(doc.values().toCardinal().text());
// //  addition and subtraction
// console.log(doc.values().add(14).toText().text());
// console.log(doc.values().add(7).toOrdinal().text());
// console.log(doc.values().add("four").toCardinal().toNumber().text());
// let doc = nlp("ninety five thousand and fifty two");
// console.log(doc.numbers().add(20).text());
// console.log(doc.wordCount());
// console.log(doc.dates());

/* ---------------------------------- Dates --------------------------------- */
// let doc = nlp("the second monday of february");
// const doc = nlp("I will go next friday");
// console.log(doc.dates().get());
// console.log(doc.dates().toShortForm());

const Sentiment = require("sentiment");
const sentiment = new Sentiment();

let doc = sentiment.analyze(
  "I like apples. I am not fan of oranges. I love avocados"
).score;

console.log(doc);

corpus = [
  "I loved game of thrones a lot.",
  "I also loved american gods.",
  "But house of dragon was not much",
];

corpus.forEach((s) => {
  console.log(sentiment.analyze(s));
});
