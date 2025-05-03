module.exports = {
    HOST: process.env.DB_HOST || 'db',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASSWORD || '',
    DB: process.env.DB_NAME || 'edacy',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};