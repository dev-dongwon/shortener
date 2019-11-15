require("dotenv").config();

// import modules
const express = require("express");
const morgan = require("morgan");

const stopServer = async server => {
  await server.close();
  process.exit();
};

const runServer = async () => {
  const app = express();

  // middlewares
  app.use(morgan("dev"));
  app.use(express.json());

  const server = app.listen(3000, () => {
    console.info("App listening on port 3000!");
  });
};

runServer()
  .then(() => {
    console.info("run server");
  })
  .catch(error => {
    console.error("Unable run:", error);
  });
