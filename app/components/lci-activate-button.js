import Ember from 'ember';

export default Ember.Component.extend({
  isInactive: true,

  setup: Ember.on('init', function(){
    this.setProperties({isInactive: this.get('repo.isInactive')});
  }),

  actions: {
    updateStatus(status) {
      var repo = this.get('repo');
      repo.set('status', status);
      this.sendAction('updateActivation', repo);
    }
  }
});
