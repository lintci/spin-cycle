import ProtectedRoute from './protected';

export default ProtectedRoute.extend({
  actions: {
    updateActivation(repo) {
      repo.save();
    }
  },

  model() {
    return this.store.findAll('repository');
  }
});
