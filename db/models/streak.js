const { DataTypes } = require('sequelize');
const sequelize = require('./../../sequalize.js'); 

const Streak = sequelize.define('Streak', {
  streakID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: true  // Set to true if streaks can currently be ongoing
  },
  currentStreak: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'streaks'  // Ensure this matches your actual table name
});

module.exports = Streak;
