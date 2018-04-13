/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patienthealthfamily', {
    regno: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'patients',
        key: 'regno'
      }
    },
    familyhealthid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      references: {
        model: 'patientqafamily',
        key: 'id'
      }
    }
  }, {
    tableName: 'patienthealthfamily',
	timestamps: false
  });
};
