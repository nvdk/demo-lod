import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sparql');
  this.route('datasets', function() {
    this.route('show', { path: ':id'});
  });
  this.route('display', { path: '*route'});
});

export default Router;
