import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.belongsTo('owner', {async: false}),
  // builds: DS.hasMany('build', {async: true}),

  name: DS.attr(),
  provider: DS.attr(),
  status: DS.attr(),

  fullName: Ember.computed('owner.name', 'name', function() {
    return `${this.get('owner.name')}/${this.get('name')}`;
  }),

  url: Ember.computed('fullName', function() {
    return `https://github.com/${this.get('fullName')}`;
  }),

  isActive: Ember.computed('status', function() {
    return this.get('status') === 'active';
  }),

  isInactive: Ember.computed('status', function() {
    return this.get('status') === 'inactive';
  })
});
