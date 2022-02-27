// globals
const KEY_CODES = {
  'BACKSPACE': 'Backspace',
  'DELETE': 'Delete'
};
const VALID_KEYS = [
  KEY_CODES['BACKSPACE'],
  KEY_CODES['DELETE']
];

// funcs
function check_words(e) {
    // get tokenized words
    var clean_words = tokenize(this.value);

    // get word count
    const word_count = clean_words.length;

    // pass text to entropy text calculator (from: scripts/nlp.js)
    let score = calculate_text_entropy(clean_words);

    // get output elements
    const enden_score_div = document.getElementById('enden_score');
    const misc_score_div = document.getElementById('misc_score_metrics');

    // setup total words and total score template
    var total_words_template = word_count;
    var total_score_template = score.toFixed(8);

    // update score
    enden_score_div.innerHTML =
      'Entropy-Density Score: ' +
      (word_count != 0 ? score/clean_words.length : 0).toFixed(8);
    misc_score_div.innerHTML =
      'Total Words: ' + total_words_template +
      '  |  ' +
      'Total Entropy: ' + total_score_template;
}

/*
on load
*/
// get prompt area where essay will be written
const textarea = document.getElementById('prompt');

// now add even listeners for ANY key up or key down event
textarea.addEventListener('keydown', check_words);
textarea.addEventListener('keyup', check_words);
