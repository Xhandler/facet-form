const {
  Pool
} = require('pg');
const {
  DB_SOCKET,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = require('../config');

const pool = new Pool({
  host:DB_SOCKET,
  user:DB_USER,
  password:DB_PASSWORD,
  database:DB_NAME
});

module.exports = {
  query: async function query(text, params) {
    try {
      const startTime = Date.now();
      const { rows } = await pool.query(text, params);
      const duration = Date.now() - startTime;
      console.log(`Executed ${text} in ${duration}ms`);
      return rows;
    } catch(e) {
      console.error(e);
      return null;
    }
  }
}