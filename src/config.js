module.exports = {
  db: {
    dialect : "mysql",
    url : process.env.MYSQL_URL
  },
  hostUrl: process.env.HOST_URL || "http://localhost:3000"
};
