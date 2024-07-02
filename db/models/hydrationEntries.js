const { DataTypes } = require('sequelize');
const sequelize = require('./../../sequalize.js'); 

const HydrationEntries = sequelize.define('HydrationEntries', {
  hydrationID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userID: DataTypes.INTEGER,
  beverageTypeID: DataTypes.INTEGER,
  amount: DataTypes.STRING,
  dateTime: DataTypes.DATE
}, {
  timestamps: false
});

module.exports = HydrationEntries;
