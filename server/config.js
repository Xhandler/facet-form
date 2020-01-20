require('dotenv').config()

module.exports = { 
    host: String(process.env.HOST || "127.0.0.1"),
    serverPort: Number(process.env.SERVER_PORT || 3000),
    dbSocket: String(process.env.DB_SOCKET || "/var/run/postgresql"),
    dbUser: String(process.env.DB_USER || "admin"),
    dbPassword: String(process.env.DB_PASS || "aReallyGoodPassword"),
    dbName: String(process.env.DB_NAME || "facet_wealth")
};