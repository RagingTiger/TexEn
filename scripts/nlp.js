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

function information(p) {
  // calculate information content of single event
  return - Math.log2(p)
}

function entropy(p) {
  // calculate shannon entropy (i.e. expected info E[I]) for a single event
  return p * information(p);
}

function information_metrics(p) {
  // first get information content
  let info = information(p);

  // then return array of info content, and entropy
  return [info, p * info];
}

function calculate_text_information(words) {
  // calculate information metrics (from: data/word_probability.js)
  let metrics = words.map(
    function (w) {
      // check if word probability exists
      let p = WORD_PROBABILITY[w] || 1;
      // get information
      return information_metrics(p);
    }
  );

  // now totals for word metrics
  let totals = metrics.reduce(
    // create function to apply to each word's information metrics
    function (previousVal, currentVal) {
      // iterate over currentVal and update previousVal
      currentVal.forEach((element, index) => previousVal[index] += element);
      // now give back newly updated previous value (i.e. the running total)
      return previousVal
    },
    // initial value for when no words are present
    [0, 0]
  );

  // now convert totals to dictionary
  return {
    'information': totals[0],
    'entropy': totals[1]
  };
}
