module.exports = function(sequelize, DataTypes) 
{
	var User = sequelize.define('user', 
	{
		id: {
			type: DataTypes.INTEGER(11),
			allowNull:false,
			primaryKey:true,
			autoIncrement:true
		},
		username: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		password: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		firstname: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		lastname: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		lastlogin: {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		gender: {
			type: DataTypes.ENUM('M','F'),
			allowNull: true
		},
		designation: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		phonenumber: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		status: {
			type: DataTypes.ENUM('active','inactive'),
			allowNull: true,
			defaultValue: 'active'
		}
	});
	
	return User;
}