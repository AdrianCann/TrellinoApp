Trellino.Views.ShowBoard = Backbone.View.extend({

  template: JST["boards/show"],

  tagName: "section",
  className: "show-board",

  render: function() {
    var lists = this.model.get("lists");
    console.log(this.model);

    var renderedContent = this.template({
      board: this.model,
      lists: lists,
      members: this.model.get("members")
    });

    this.$el.html(renderedContent);
    return this;
  }

});