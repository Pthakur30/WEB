const exp = require("express");
const app = exp();

app.get("/", function (req, res) {
  res.send("Hello");
});

var port = process.env.PORT || 3000;
app.listen(port);
