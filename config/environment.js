/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'spin-cycle',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          scope: 'user:email,repo',
          redirectUri: '/repos'
        }
      }
    },

    apiVersion: 'api/v1'
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.apiHost = 'https://api.lintci.com'
    ENV.torii.providers['github-oauth2'].apiKey = '7e78c3caa94895775b3a';//'ff35d7dec8911f1337b3';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = 'https://api.lintci.com'
    ENV.torii.providers['github-oauth2'].apiKey = '7e78c3caa94895775b3a';
  }

  ENV.apiNamespace = ENV.apiHost + '/' + ENV.apiVersion
  ENV.apiTokenEndpoint = ENV.apiNamespace + '/auth/token'

  return ENV;
};
