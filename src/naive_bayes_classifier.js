const natural = require("natural");

// Naive Bayes
let classifier = new natural.BayesClassifier();

// Training Data

const data = [
  { text: "I need to buy a new computer", category: "hardware" },
  { text: "I need to clean the code", category: "software" },
  { text: "We need to buy a new hard drive", category: "hardware" },
  { text: "i need a new power supply", category: "hardware" },
  { text: "The motherboard is broken", category: "hardware" },
  { text: "We are running out of memory storage", category: "hardware" },
  { text: "The computer is new", category: "hardware" },
  { text: "The unit test failed", category: "software" },
  { text: "The code works well", category: "software" },
  { text: "I want to refactor the program", category: "software" },
  { text: "program", category: "software" },
  { text: "You have to push the code to github", category: "software" },
];

data.forEach((item) => {
  classifier.addDocument(item.text, item.category);
});

// Training
classifier.train();

// Predict
console.log(classifier.classify("This code is faulty"));
console.log(classifier.classify("This monitor is faulty"));

// Persist/save our training model
classifier.save("nvcClassifier.json", (err, classifier) => {});

// From pre trained
natural.BayesClassifier.load("nvcClassifier.json", null, (err, classifier) => {
  console.log(classifier.classify("This monitor is faulty"));
});
