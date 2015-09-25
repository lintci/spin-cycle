import DS from 'ember-data';
import ENV from 'spin-cycle/config/environment'
export default DS.JSONAPIAdapter.extend({
  host: ENV.apiHost,
  namespace: ENV.apiVersion
});
