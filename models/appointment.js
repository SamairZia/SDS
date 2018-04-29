/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('appointment', {
		appno: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		regno: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			references: {
				model: 'patients',
				key: 'regno'
			}
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
		tableName: 'appointment',
		timestamps: false
	});
};
