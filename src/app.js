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

/* ---------------------------------- Sentiment --------------------------------- */
// const Sentiment = require("sentiment");
// const sentiment = new Sentiment();

// let doc = sentiment.analyze(
//   "I like apples. I am not fan of oranges. I love avocados"
// ).score;

// console.log(doc);

// corpus = [
//   "I loved game of thrones a lot.",
//   "I also loved american gods.",
//   "But house of dragon was not much",
// ];

// corpus.forEach((s) => {
//   console.log(sentiment.analyze(s));
// });

/* ---------------------------------- N-grams --------------------------------- */
// const nlp = require("compromise");
// nlp.extend(require("compromise-stats"));

// const doc1 = nlp("The car is behind the garage.");

// console.log(doc1.ngrams());
// console.log(doc1.unigrams());
// console.log(doc1.bigrams());

/* ------------------------ Tokenization with Natural ----------------------- */
const natural = require("natural");

// Tokenization
// let tokenizer = new natural.WordTokenizer();

// let words =
//   "I like working with natural tokenizer, this will enhance my countries NLP access and usage.";
// console.log(tokenizer.tokenize(words));

// let reTokenizer = new natural.RegexpTokenizer({ pattern: /\-/ });

// let re = "I-like working-with natural tokenizer";
// console.log(reTokenizer.tokenize(re));

// let treebankTokenizer = new natural.TreebankWordTokenizer();

// let treebank = "I,like,working,with natural tokenizer";
// console.log(treebankTokenizer.tokenize(treebank));

// Stemming
//  Porter Stemmer  -s, -ed, -ing
//  Lancaster Stemmer  un- re-  ... -ing, -ly, -ed, -ational, -ization, -fulness
// console.log(
//   natural.PorterStemmer.tokenizeAndStem(
//     "stemming is an act of making a word into its basic format"
//   )
// );

// let words = "runner runs";
// console.log(natural.PorterStemmer.stem(words));
// console.log(natural.LancasterStemmer.stem("Runner"));

//  .attach() // Old Code ?

// natural.PorterStemmer.attach();
// console.log("running".stem());

// let nounInflector = new natural.NounInflector();

// Plural

// console.log(nounInflector.pluralize("book"));

// const wordsToInflect = ["matrix", "sheep", "index", "book"];

// wordsToInflect.forEach((word) => {
//   console.log(nounInflector.pluralize(word));
// });

// console.log(nounInflector.singularize("words"));

// Verbs
// let verbInflector = new natural.PresentVerbInflector();
// console.log(verbInflector.pluralize("has"));
// console.log(verbInflector.pluralize("becomes"));
// console.log(verbInflector.singularize("become"));

// Sentiment Analysis
// let Sentiment = require("natural").SentimentAnalyzer;
// let stemmer = require("natural").PorterStemmer;
// let analyzer = new Sentiment("English", stemmer, "afinn");
// let tokenizer = new natural.WordTokenizer();

// console.log(
//   analyzer.getSentiment(["I", "like", "javascript", "and", "Julia", "Python"])
// ); // 0.333333333333

// let data = [
//   "He likes eating rice all the the time",
//   "The girl was angry at the driver",
// ];

// data.forEach((sentence) => {
//   console.log(analyzer.getSentiment(tokenizer.tokenize(sentence)));
// });

// let A = "sea";
// let B = "see";

// let C = "meat";
// let D = "meet";

// function comparePhonetics(a, b) {
//   let phonetics = natural.Metaphone;
//   if (phonetics.compare(a, b)) {
//     console.log(` [ # ] ${a} and ${b} Sound alike`);
//   } else {
//     console.log(` [ # ] ${a} and ${b} Don't Sound alike`);
//   }
// }

// comparePhonetics(A, B); // bool
// comparePhonetics(A, C);
// comparePhonetics(D, C);

// Phonetic Formula
// console.log(phonetics. );

// Naive Bayes
// let classifier = new natural.BayesClassifier();

// Training Data

// const data = [
//   { text: "I need to buy a new computer", category: "hardware" },
//   { text: "I need to clean the code", category: "software" },
//   { text: "We need to buy a new hard drive", category: "hardware" },
//   { text: "i need a new power supply", category: "hardware" },
//   { text: "The motherboard is broken", category: "hardware" },
//   { text: "We are running out of memory storage", category: "hardware" },
//   { text: "The computer is new", category: "hardware" },
//   { text: "The unit test failed", category: "software" },
//   { text: "The code works well", category: "software" },
//   { text: "I want to refactor the program", category: "software" },
//   { text: "program", category: "software" },
//   { text: "You have to push the code to github", category: "software" },
// ];

// data.forEach((item) => {
//   classifier.addDocument(item.text, item.category);
// });

// Training
// classifier.train();

// Predict
// console.log(classifier.classify("This code is faulty"));
// console.log(classifier.classify("This monitor is faulty"));

// Persist/save
// classifier.save("nvcClassifier.json", (err, classifier) => {});

// From pre trained
// natural.BayesClassifier.load("nvcClassifier.json", null, (err, classifier) => {
//   console.log(classifier.classify("This monitor is faulty"));
// });
