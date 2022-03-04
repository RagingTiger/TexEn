/*
 * ------ EXECUTE ON LOAD -------
 */

// check to see if texen config exists and parse to global config object
var TEXEN_CONFIG = JSON.parse(localStorage.getItem('texen_config'));

// if config is null aka empty
if (!TEXEN_CONFIG) {
  // create new global config object, basically a JSON dictionary
  TEXEN_CONFIG = {
    'irb': 0
  };

  // store config
  localStorage.setItem('texen_config', JSON.stringify(TEXEN_CONFIG));
}
