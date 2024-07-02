const { DataTypes } = require('sequelize');
const sequelize = require('./../../sequalize.js'); 

const BeverageType = sequelize.define('BeverageType', {
  beverageTypeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'beverageTypes'  // Ensure this matches your actual table name
});

module.exports = BeverageType;
