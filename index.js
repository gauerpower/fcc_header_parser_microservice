const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/whoami", function (req, res) {
  const userIP = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userLanguage = req.headers["accept-language"];
  const userSoftware = req.headers["user-agent"];
  res.json({
    ipAddress: userIP,
    language: userLanguage,
    software: userSoftware,
  });
});

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
