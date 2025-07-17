import knex from 'knex';
import config from "../config/knexfile"

const db = knex(config.development);

// Test connection
db.raw('SELECT 1')
  .then(() => console.log('SQLite connected'))
  .catch((err) => console.error('❌ SQLite connection failed', err));

export default db;