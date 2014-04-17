Trellino.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  parse: function(jsonResp) {
    if (jsonResp["lists"]) {
      this.lists = new Trellino.Collections.Lists(jsonResp["lists"], {
        board: this
      });
      delete jsonResp["lists"];
    };
    return jsonResp;
  }
});