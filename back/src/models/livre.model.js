const { Sequelize } = require('sequelize');
const dbConfig = require('../configs/db.config');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
        retry: {
            max: 5
        }
    }
);

const db = {}; 

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Définition du modèle Livre
db.Livre = sequelize.define('livre', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = db;
