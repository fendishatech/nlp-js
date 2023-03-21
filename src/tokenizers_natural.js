const natural = require("natural");

// Tokenization
let tokenizer = new natural.WordTokenizer();

let words =
  "I like working with natural tokenizer, this will enhance my countries NLP access and usage.";
console.log(tokenizer.tokenize(words));

let reTokenizer = new natural.RegexpTokenizer({ pattern: /\-/ });

let re = "I-like working-with natural tokenizer";
console.log(reTokenizer.tokenize(re));

let treebankTokenizer = new natural.TreebankWordTokenizer();

let treebank = "I,like,working,with natural tokenizer";
console.log(treebankTokenizer.tokenize(treebank));
