Trellino.Routers.Boards = Backbone.Router.extend({

  initialize: function(boards, $rootEl) {
    this.boards = boards;
    this.$rootEl = $rootEl;
  },

  routes: {
    "": "boardIndex",
    "boards/new": "newBoard",
    "boards/:id": "showBoard",
    "lists/new": "newList"
  },

  boardIndex: function() {
    var view = new Trellino.Views.BoardsIndex({
      collection: this.boards
    });

    this._swapView(view);
  },

  newBoard: function() {
    var model = new Trellino.Models.Board();

    var view = new Trellino.Views.NewBoard({
      model: model,
      collection: this.boards
    });

    this._swapView(view);
  },

  showBoard: function(id) {
    var model = this.boards.get({id: id});
    var view = new Trellino.Views.ShowBoard({
      model: model
    });

    this._swapView(view);
  },

  newList: function() {
    var model = new Trellino.Models.List();

    var view = new Trellino.Views.NewList({
      model: model,
      boards: this.boards
    });

    this._swapView(view);
  },

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }

});
