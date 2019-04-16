# study-assist

A program that analyses text and attaches topic and mood badges to it. The project would explore how we can use Natural Language Processing in Javascript.

Problem Solved: Help students & researchers to label and categorise online content or their own content.

## MVP

A text content labeling browser add-on. The plugin attaches topic and mood badges to text content on a visited page.
The project would be built as an API which receives text content and returns label information.

**Technologies**  
HTML/CSS/JavaScript  
JS Machine Learning libraries  
NodeJS  
(MongoDB?)

## Possible Extensions

- Suggest related content found online, and possibly suggest actions based on the text analysis
- Suggest possible category folders (in bookmarks)
- Memorize topics for insights on recurrent research topics  
  (statistical insight of visited pages)  
  (automatically generated study diary)
- Analyse user's notes in a browser notes app
- Explore the relation between topic and mood to elaborate more detailed insights on the content

## Possible Tools

| Tool                                                                                                  | Area               | Type      | Environment    |
| :---------------------------------------------------------------------------------------------------- | :----------------- | :-------- | :------------- |
| [TensorFlow.js](https://www.tensorflow.org/js/)                                                       | ML                 | Library   | Browser        |
| [Bain.js](https://github.com/BrainJS/brain.js)                                                        | ML                 | Library   | Browser / Node |
| [Synaptic](https://github.com/cazala/synaptic)                                                        | ML                 | Library   | Browser / Node |
| [ml5.js](https://ml5js.org/)                                                                          | ML                 | Library   | Browser        |
| [compromise](http://compromise.cool/)                                                                 | NLP                | Library   | Browser / Node |
| [NLP.js](https://www.npmjs.com/package/node-nlp)                                                      | NLP                | Library   | Node           |
| [NaturalNode](https://github.com/NaturalNode/natural)                                                 | NLP Pre-processing | Library   | Node           |
| [Sentence Encoder](https://github.com/tensorflow/tfjs-models/tree/master/universal-sentence-encoder/) | NLP Pre-processing | Library   | Node           |
| [node-word2vec](https://github.com/Planeshifter/node-word2vec)                                        | NLP Pre-processing | Library   | Node           |
| [lda](https://github.com/primaryobjects/lda)                                                          | Topic Modeling     | Library   | Node           |
| [Toxicity](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)                            | Sentiment Analysis | Library   |                |
| [sentiment](https://www.npmjs.com/package/sentiment)                                                  | Sentiment Analysis | Library   | Node           |
| [WordNet](https://wordnet.princeton.edu/)                                                             | NLP                | Database  |                |
| [Cloud Natural Language](https://cloud.google.com/natural-language/)                                  | NLP                | API       |                |
| [Watson](https://www.ibm.com/watson/services/natural-language-understanding/)                         | NLP                | API       |                |
| [Amazon Comprehend](https://aws.amazon.com/comprehend/)                                               | NLP                | API       |                |
| [wit.ai](https://wit.ai/)                                                                             | NLP                | API       |                |
| [Dialogflow](https://dialogflow.com/)                                                                 | NLP                | API       |                |
| [lunr.js](https://lunrjs.com/)                                                                        | Search Engine      | Library   |                |
| [Replika](https://replika.ai/)                                                                        | Bot                | Library   |                |
| [Leon](https://getleon.ai/)                                                                           | Bot                | Library   |                |
| [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)                     | Voice Recognition  | API       |                |
| [jovo](https://www.jovo.tech/)                                                                        | Voice Regognition  | Framework |                |
| [TensorFlow Playground](https://playground.tensorflow.org/)                                           | ML                 | Helper    |                |
| [tfjs-viz](https://github.com/tensorflow/tfjs-vis)                                                    | ML                 | Helper    | Browser        |
