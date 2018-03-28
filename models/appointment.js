/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('appointment', {
    appno: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    regno: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'appointment'
  });
};
