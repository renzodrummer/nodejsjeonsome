module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define('accounts', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      account: {
          type: DataTypes.STRING,
          allowNull: false
      },
      normal_balance: {
          type: DataTypes.STRING,
          allowNull: false
      }
  });

  return Accounts;
};
