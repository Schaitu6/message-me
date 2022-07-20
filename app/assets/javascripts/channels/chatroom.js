(function() {
  App.chatroom = App.cable.subscriptions.create("ChatroomChannel", {
    connected: function() {},
    // Called when the subscription is ready for use on the server
    disconnected: function() {},
    // Called when the subscription has been terminated by the server
    received: function(data) {
      return alert(data.mod_messages);
    }
  });

}).call(this);


//# sourceMappingURL=chatroom.js.map
//# sourceURL=coffeescript