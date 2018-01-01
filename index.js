const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("root test successfull");
});

const server = app.listen(port, () => {
  const { port, address } = server.address();
  console.log(`http://${address}:${port}`);
});
