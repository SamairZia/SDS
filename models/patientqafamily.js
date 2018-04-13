/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patientqafamily', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    problem: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'patientqafamily',
	timestamps: false
  });
};
