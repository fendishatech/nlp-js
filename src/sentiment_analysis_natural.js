const natural = require("natural");
// Sentiment Analysis
let Sentiment = require("natural").SentimentAnalyzer;
let stemmer = require("natural").PorterStemmer;
let analyzer = new Sentiment("English", stemmer, "afinn");
let tokenizer = new natural.WordTokenizer();

console.log(
  analyzer.getSentiment(["I", "like", "javascript", "and", "Julia", "Python"])
); // 0.333333333333

let data = [
  "He likes eating rice all the the time",
  "The girl was angry at the driver",
];

data.forEach((sentence) => {
  console.log(analyzer.getSentiment(tokenizer.tokenize(sentence)));
});
