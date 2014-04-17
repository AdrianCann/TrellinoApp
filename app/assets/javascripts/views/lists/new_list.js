Trellino.Views.NewList = Backbone.View.extend({

  template: JST['lists/new'],
  tagName: 'section',
  className: 'new-list',

  initialize: function(options) {
    this.boards = options.boards;
  },

  events: {
    "click button.create-new-list": "submitForm"
  },

  render: function() {
    var renderedContent = this.template({
      list: this.model,
      boards: this.boards
    });
    this.$el.html(renderedContent);
    return this;
  },

  submitForm: function(event) {
    event.preventDefault();

    var newList = this.model;
    var $form = $(event.currentTarget).closest("form");
    var attrs = $form.serializeJSON();
    var board = this.boards.get(attrs.list.board_id);

    var success = function() {
      Backbone.history.navigate('/boards/' + board.get("id"), {trigger: true})
    };

    newList.set(attrs);
    if (newList.isNew()) {
      board.lists.create(newList, {
        success: success
      });
    } else {
      newLists.save({
        success: success
      });
    }
  }
});