Trellino.Collections.Lists = Backbone.Collection.extend({

  model: Trellino.Models.List,

  initialize: function(models, options) {
    this.board = options.board;
  },

  url: function() {
    return '/api/boards/' + this.board.get("id") + '/lists';
  }
});