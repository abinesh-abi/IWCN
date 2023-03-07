require("dotenv").config();


module.exports = {
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASS: process.env.MYSQL_PASS,
  MYSQL_DB: process.env.MYSQL_DB,
  MYSQL_TABLE :process.env.MYSQL_TABLE
};
