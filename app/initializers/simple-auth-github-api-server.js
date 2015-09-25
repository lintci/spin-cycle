import GithubAuthenticator from '../authenticators/github';
import ENV from 'spin-cycle/config/environment';

export function initialize(container) {
  var torii = container.lookup('torii:main');
  var authenticator = GithubAuthenticator.create({torii: torii, apiTokenEndpoint: ENV.apiTokenEndpoint});

  container.register('authenticator:github-api-server', authenticator, {instantiate: false});
}

export default {
  name: 'simple-auth-github-api-server',
  initialize: initialize,
  before: 'simple-auth',
  after: 'torii'
};
