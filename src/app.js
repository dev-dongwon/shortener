require("dotenv").config();

// import modules
const express = require("express");
const morgan = require("morgan");
const sequelize = require("./models/index");

const stopServer = async (server, sequelize) => {
  await server.close();
  await sequelize.close();
  process.exit();
};

const runServer = async () => {
  const app = express();

  // middlewares
  app.use(morgan("dev"));
  app.use(express.json());

  // router
  const urlRouter = require("./routes/url");

  // routes
  app.use("/", urlRouter);

  const server = app.listen(3000, () => {
    console.info("App listening on port 3000!");
  });

  try {
    await sequelize.authenticate();
    await sequelize.sync({
      force: true
    });
  } catch (error) {
    stopServer(server, sequelize);
    throw error;
  }
};

runServer()
  .then(() => {
    console.info("run server");
  })
  .catch(error => {
    console.error("Unable run:", error);
  });
