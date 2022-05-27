const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/bad-route", (req, res) => {
  res.status(418);
  res.set({
    "X-CUSTOM-HEADER": "Hello World",
  });
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
