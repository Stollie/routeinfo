var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto',
  events: {
      goToPost: function(track) {
          this.transitionToAnimated('track', {tracks: 'slideLeft'}, track);
      }
  }
});

Router.map(function() {
  this.resource('tracks', function() {
    this.resource('track', { path: ':track_id' });
  });
});

export default Router;
