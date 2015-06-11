import Ember from 'ember';
import Oauth2 from 'simple-auth-oauth2/authenticators/oauth2';

export default Oauth2.extend({
  torii: null,
  apiTokenEndpoint: null,
  provider: "github-oauth2",

  authenticate() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this.torii.open(this.provider).then((data) => {
        data.code = data.code || data.authorizationCode;

        this.makeRequest(this.apiTokenEndpoint, data).then((response) => {
          Ember.run(() => {
            var expiresAt = this.absolutizeExpirationTime(response.expires_in);
            this.scheduleAccessTokenRefresh(response.expires_in, expiresAt, response.refresh_token);

            if (!Ember.isEmpty(expiresAt)) {
              response = Ember.merge(response, {expires_at: expiresAt});
            }

            resolve(response);
          });
        }, (xhr) => {
          Ember.run(() => {reject(xhr.responseJSON || xhr.responseText);});
        });
      }, reject);
    });
  }
});
