window.Trellino = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var boards = new Trellino.Collections.Boards();
    var $rootEl = $("#content");

    boards.fetch({
      success: function() {
        new Trellino.Routers.Boards(boards, $rootEl);
        Backbone.history.start();
      }
    });
  }
};

$(document).ready(function(){
  Trellino.initialize();
});