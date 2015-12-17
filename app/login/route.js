import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginWithGithub: () => {
      this.get('torii').open('github-oauth2').then((authorization) => {
        debugger;
        this.transitionTo('builds');
      }, (error) => {
        debugger;
        this.controllerFor('login').set('error', 'Could not login: ' + error.message);
      });
    }
  }
});
