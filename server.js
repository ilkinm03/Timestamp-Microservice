const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", (req, res) => {
   res.json({ greeting: "hello API" });
});

app.get("/api", (req, res) => {
  let now = new Date();

  res.json({
    "unix": now.getTime(),
    "utc": now.toUTCString()
  });
});

app.get("/api/:date_string", (req, res) => {
   let dateString = req.params.date_string;
   let passedInValue = new Date(dateString);

   if (passedInValue == "Invalid Date") {
      res.json({ error: "Invalid Date" });
   } else {
      res.json({
         unix: passedInValue.getTime(),
         utc: passedInValue.toUTCString(),
      });
   }
});

var listener = app.listen(port, () => {
   console.log("Your app is listening on port " + listener.address().port);
});
