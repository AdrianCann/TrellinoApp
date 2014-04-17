Trellino.Routers.Boards = Backbone.Router.extend({

  initialize: function(boards, $rootEl) {
    this.boards = boards;
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "boardIndex",
    "boards/new": "newBoard"
  },

  boardIndex: function() {
    var view = new Trellino.Views.BoardsIndex({
      collection: this.boards
    });

    this._swapView(view);
  },

  newBoard: function() {
    var model = new Trellino.Models.Board();

    var view = Trellino.Views.NewBoard({
      model: model
    })
  }

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
