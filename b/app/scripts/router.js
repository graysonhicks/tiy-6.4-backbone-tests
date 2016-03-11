
var $ = require('jquery');
var Backbone = require('backbone');

var Views = require('./views/views.js');
var Models = require('./models/models.js');


var contactBook = new Models.ContactCollection();
var responseView = new Views.ResponseFormView({collection: contactBook});

var Router = Backbone.Router.extend({

  routes: {
    '': 'index',
    'response': 'response'
  },
    // You can use an event aggregator to relay events around
    // this.listenTo(this.vent, 'navigate:show', function(id){
    //   this.navigate('show/' + id, {trigger: true});
    // }.bind(this));
  /*
   * Route handlers
   */
  // initialize: function(){
  //
  // },
  index: function(){
    var indexView = new Views.ContactFormView({collection: contactBook});
    $('.main-content').html(indexView.render().el);
  },

  response: function() {

    console.log('response');
    this.showView(responseView);
  },
  /*
   * Helper functions
   */
  showView: function(view) {
    if(this.currentView){
      this.currentView.remove();
    }

    this.currentView = view;
    $('.main-content').html(view.el);
    return view;
  },
});

module.exports = new Router();
