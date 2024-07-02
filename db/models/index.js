const User = require('./user');
const HydrationEntry = require('./hydrationEntries');
const BeverageType = require('./beverageType');
const Streak = require('./streak');
const UserChallenge = require('./userChallenge');
const Challenge = require('./challenge');


// Define relationships
User.hasMany(HydrationEntry, { foreignKey: 'userID' });
HydrationEntry.belongsTo(User, { foreignKey: 'userID' });

BeverageType.hasMany(HydrationEntry, { foreignKey: 'beverageTypeID' });
HydrationEntry.belongsTo(BeverageType, { foreignKey: 'beverageTypeID' });

User.hasMany(Streak, { foreignKey: 'userID' });
Streak.belongsTo(User, { foreignKey: 'userID' });

User.hasMany(UserChallenge, { foreignKey: 'userID' });
UserChallenge.belongsTo(User, { foreignKey: 'userID' });

Challenge.hasMany(UserChallenge, { foreignKey: 'challengeID' });
UserChallenge.belongsTo(Challenge, { foreignKey: 'challengeID' });

module.exports = {
  User,
  HydrationEntry,
  BeverageType,
  Streak,
  UserChallenge,
  Challenge
};