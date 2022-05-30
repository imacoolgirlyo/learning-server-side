// const express = require("express");
// const app = express();
// const port = 8001;

// app.get("/", (req, res) => {
//   res.send("Helloo Diana!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const ronin = require("ronin-server");
const mocks = require("ronin-mocks");

const server = ronin.server();

server.use("/", mocks.server(server.Router(), false, true));
server.start();
