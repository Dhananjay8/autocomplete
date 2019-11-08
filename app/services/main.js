const fs = require('fs');
const autocomplete = require('../../lib/autocomplete.js');
const input = fs.createReadStream('./test/words.txt');

class Main {
    constructor(searchTerm) {
        const oThis = this;

        oThis.searchTerm = searchTerm;
    }

    perform() {
        const oThis = this;
            var matches;

        oThis.readLines(input, function(words) {
            var a = autocomplete.connectAutocomplete();

            a.on('close', function() {
                process.exit(0);
            });

            a.on('loaded', function() {
                var start = new Date();
                matches = a.search(oThis.searchTerm);
                var duration = new Date() - start;
                console.log('Elapsed time to search dictionary for 3 character prefix: ' + duration + 'ms');
            });

            a.initialize(function(onReady) {
                console.log('\nLoading large dictionary of words (~500,000 words)');
                var start = new Date();
                onReady(words);
                var duration = new Date() - start;
                console.log('Elapsed time to load dictionary: ' + duration + 'ms');
            });
        });
        return matches;
    }

    // Read the really big data file into memory
    readLines(input, onReady) {
        var words = [];

        input.on('data', function(data) {
            words = words.concat(data.toString().split('\n'));
        });

        input.on('end', function() {
            onReady(words);
        });

    }
}

module.exports = Main;

