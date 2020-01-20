require('dotenv').config()

const CONFIG = Object.freeze({ 
    HOST: String(process.env.HOST || '127.0.0.1'),
    SERVER_PORT: Number(process.env.SERVER_PORT || 3000),
    DB_SOCKET: String(process.env.DB_SOCKET || '/var/run/postgresql'),
    DB_USER: String(process.env.DB_USER || 'admin'),
    DB_PASSWORD: String(process.env.DB_PASS || 'aReallyGoodPassword'),
    DB_NAME: String(process.env.DB_NAME || 'facet_wealth')
});

module.exports = CONFIG;