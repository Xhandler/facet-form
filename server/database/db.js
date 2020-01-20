const {
  Pool
} = require('pg');
const {
  dbSocket,
  dbUser,
  dbPassword,
  dbName
} = require('../config');

const pool = new Pool({
  host:dbSocket,
  user:dbUser,
  password:dbPassword,
  database:dbName
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