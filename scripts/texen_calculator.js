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
  let clean_words = tokenize(this.value);

  // get word count
  const word_count = clean_words.length;

  // pass text to information metrics calculator (from: scripts/nlp.js)
  let metrics = calculate_text_information(clean_words);

  // get output elements
  const text_info_metrics_div = document.getElementById('text_info_metrics');

  // setup totals
  let total_words = word_count;
  let total_information = metrics['information'].toFixed(8);
  let total_entropy = metrics['entropy'].toFixed(8);
  let entropy_rate = (word_count != 0
      ? total_entropy/clean_words.length
      : 0).toFixed(8);
  let information_rate = (word_count != 0
      ? total_information/clean_words.length
      : 0).toFixed(8) - TEXEN_CONFIG['irb'];

  // update information metrics
  text_info_metrics_div.innerHTML = `
    <table>
      <tr>
        <th>Words</th>
        <th>Entropy</th>
        <th>Information</th>
        <th>Entropy Rate</th>
        <th>Information Rate</th>
      </tr>
      <tr>
        <td>${total_words}</td>
        <td>${total_entropy}</td>
        <td>${total_information}</td>
        <td>${entropy_rate}</td>
        <td>${information_rate}</td>
      </tr>
    </table>
    <br><br>
  `;
}

/*
on load
*/
// get prompt area where essay will be written
const textarea = document.getElementById('prompt');

// now add even listeners for ANY key up or key down event
textarea.addEventListener('keydown', check_words);
textarea.addEventListener('keyup', check_words);
