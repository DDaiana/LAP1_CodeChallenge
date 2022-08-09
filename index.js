const server = require("./server");

// server.listen(5501, () => {
//   console.log(`Google Clone Listening On Port 5501`);
// });


server.listen(process.env.PORT || 5501, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});