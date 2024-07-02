const { DataTypes } = require('sequelize');
const sequelize = require('./../../sequalize.js'); 

const UserChallenge = sequelize.define('UserChallenge', {
  userChallengeID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  challengeID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: true // Set to true if the challenge can end or be open-ended
  },
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  timestamps: false,
  tableName: 'userChallenges'  // Make sure this matches your actual table name
});

module.exports = UserChallenge;
