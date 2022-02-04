const express = require("express");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 3000;

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", function (req, res) {
   res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/hello", function (req, res) {
   res.json({ greeting: "hello API" });
});

app.get("/api/timestamp/:date_string", (req, res) => {
   let dateString = req.params.date_string;
   console.log(dateString);
   
   res.json({ error: "Invalid Date" });
});

var listener = app.listen(port, function () {
   console.log("Your app is listening on port " + listener.address().port);
});
