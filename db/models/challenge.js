const { DataTypes } = require('sequelize');
const sequelize = require('./../../sequalize.js'); 

const Challenge = sequelize.define('Challenge', {
  challengeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true  // adjust based on whether description is required
  },
  durationDays: {
    type: DataTypes.INTEGER,
    allowNull: true  // adjust based on your business logic
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: true  // define if URLs are always required or optional
  }
}, {
  timestamps: false,
  tableName: 'challenges'  // Ensure this matches your actual table name
});

module.exports = Challenge;
