/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treatment', {
    tno: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    appno: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    regno: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    treatment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cost: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    paid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'treatment'
  });
};
