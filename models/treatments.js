/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('treatments', {
		trno: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true
		},
		appno: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true,
			references: {
				model: 'appointment',
				key: 'appno'
			}
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
		treatment: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cost: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: true
		}
	}, {
		tableName: 'treatments',
		timestamps: false
	});
};
