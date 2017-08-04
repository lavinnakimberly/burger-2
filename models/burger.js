module.exports = function(sequelize, DataTypes){

  var burger = sequelize.define("burger", {
    id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true 
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1]
    },
    "date": {
      type: DataTypes.DATE
    }
  });
  return burger;
};
