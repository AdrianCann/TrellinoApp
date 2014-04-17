Trellino.Views.BoardsIndex = Backbone.View.extend({

  template: JST['boards/index'],
  tagName: 'section',
  className: 'boards',

  initialize: function() {
    this.listenTo(this.collection, "remove", this.render)
  },

  events: {
    "click button.delete-board": "deleteBoard"
  },

  render: function() {
    var renderedContent = this.template({
      boards: this.collection
    });

    this.$el.html(renderedContent);

    return this;
  },

  deleteBoard: function(event) {
    event.preventDefault();

    var id = $(event.currentTarget).attr("data-board-id");
    var board = this.collection.get(id);

    board.destroy();
  }
});