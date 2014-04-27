var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'auto',
  events: {
      goToPost: function(post) {
          this.transitionToAnimated('post', {posts: 'slideLeft'}, post);
      }
  }
});

Router.map(function() {
  this.resource('posts', function() {
    this.route('index');
  });
});

export default Router;
