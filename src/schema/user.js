module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      username: {
          type: DataTypes.STRING,
          allowNull: false
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false
      }
  });

  return User;
};

