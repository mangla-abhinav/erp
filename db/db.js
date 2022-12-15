const mysql = require('mysql');
require('dotenv').config();

async function query(sql) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'chalkpad',
  });
  const results = connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    return results;
  });
  //   connection.end();
  return results;
}

module.exports = {
  query,
};
