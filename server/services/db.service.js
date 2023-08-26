const mysql = require('mysql2/promise');
const dbConfig = require('../configs/db.config');

const pool = mysql.createPool(dbConfig);

async function query(sql, params) {
  const connection = await pool.getConnection();
  try {
    const [results, ] = await connection.execute(sql, params);
    return results;
  } finally {
    connection.release();
  }
}

module.exports = {
  query,
}