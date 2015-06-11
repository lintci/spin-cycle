import Ember from 'ember';
import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  model() {
    return this.store.find('repo')
  }
});
