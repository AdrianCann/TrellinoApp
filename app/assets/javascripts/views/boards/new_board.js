Trellino.Views.NewBoard = Backbone.View.extend({

  template: JST['boards/new'],
  tagName: 'form',
  className: 'new-board',

  events: {
    "click button.new-board": "submitForm"
  },

  render: function() {
    var renderedContent = this.template({
      board: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },

  submitForm: function(event) {
    event.preventDefault();

    var newBoard = this.model;
    var $form = $(event.currentTarget).closest("form");
    var attrs = $form.serializeJSON();

    var success = function() {
      Backbone.history.navigate("#/boards/" + newBoard.get("id"), {trigger: true})
    };

    newBoard.set(attrs);
    if (newBoard.isNew()) {
      this.collection.create(newBoard, {
        success: success
      });
    } else {
      newBoard.save({
        success: success
      });
    }
  }
});