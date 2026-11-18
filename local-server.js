const server = require("./server.js");
const port = Number(process.env.PORT || 4173);

server.listen(port, "0.0.0.0", () => {
  console.log("Reframe is ready at http://localhost:" + port);
});
