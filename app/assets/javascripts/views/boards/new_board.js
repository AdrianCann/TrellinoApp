Trellino.Views.NewBoard = Backbone.View.extend({

  template: JST['templates/new'],
  tagName: 'form',
  className: 'new-board',

  events: {
    "submit form.new-board": "submitForm"
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

    var attrs = $(event.currentTarget).serializeJSON();

    var success = function() {
      Backbone.history.navigate('', {trigger: true})
    };

    this.model.set(attrs);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        success: success
      });
    } else {
      this.model.save({
        success: success
      });
    }
  }

});