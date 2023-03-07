const Sentiment = require("sentiment");
const sentiment = new Sentiment();

let doc = sentiment.analyse("I like apples.");

console.log(doc);
