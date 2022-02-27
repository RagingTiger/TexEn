// funcs
function tokenize(text) {
  // get lower case of text
  let lower_text = text.toLowerCase();

  // remove non-alpha chars
  let alpha_text = lower_text.replace(/[^a-z0-9\s]/gi, '');

  // convert line breaks to spices
  let cleaned_text = alpha_text.replace(/[\r\n|\r\r]+/gm, ' ');

  // split on spaces
  return cleaned_text.split(' ').filter(Boolean);
}

function entropy(p) {
  // calculate shannon entropy for a single event
  return -p * Math.log2(p);
}

function calculate_text_entropy(words) {
  // calculate entropy for each word (from: data/word_probability.js)
  let scores = words.map(w => entropy(WORD_PROBABILITY[w]) || 0);

  // now sum individual word entropies
  return scores.reduce((total, n) => total + n, 0);
}
