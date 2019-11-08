# Node Autocomplete

 [Node Autocomplete](http://www.github.com/marccampbell/node-autocomplete) is an autocomplete library for [node.js](http://nodejs.org).

## Installation

```bash
$ npm install autocomplete
```

## Features

  - in memory, in process, not redis dependent
  - internal [trie](http://en.wikipedia.org/wiki/Trie) data structure to store the strings
  - super fast for adding, removing and lookups
  - performance tested for string lists of 500,000 words
  - high level of tests

## Running Tests

Install development dependencies:

```bash
$ npm install
```

Then:

```bash
autocomplete = require('./lib/autocomplete')
function onReady(autoComplete) {
  autoComplete.initialize(function(addItem) {
    addItem(['fruit', ['apple', 'red'], 'banana', 'orange', ['apples', 'yumyum'], ['apple pie', 'tasty'],
             'kiwi', 'orange juice']);
  });
}
var a = autocomplete.connectAutocomplete(onReady);
a.search('ap')
```

