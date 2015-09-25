/*
  This is an example factory definition. Factories are
  used inside acceptance tests.

  Create more files in this directory to define additional factories.
*/
import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i){return i;},
  accessToken(i){return `${i}`;},
  expiresIn: 60 * 60 * 24 * 30 // 30 days
});
