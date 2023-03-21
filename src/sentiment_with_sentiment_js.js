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
