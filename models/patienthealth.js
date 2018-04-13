/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patienthealth', {
    regno: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'patients',
        key: 'regno'
      }
    },
    healthid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      references: {
        model: 'patientqa',
        key: 'id'
      }
    },
    hospitalization: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'patienthealth',
	timestamps: false
  });
};
