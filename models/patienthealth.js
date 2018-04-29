/* jshint indent: 1 */

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
			primaryKey: true,
			references: {
				model: 'patientqa',
				key: 'id'
			}
		}
	}, {
		tableName: 'patienthealth',
		timestamps: false
	});
};
