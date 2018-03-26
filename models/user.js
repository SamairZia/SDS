module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('useraccounts', {
 
        username: {
            primaryKey: true,
            type: Sequelize.STRING
        },
		
		password: {
            type: Sequelize.STRING,
            allowNull: false
        },
		
		email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
		gender: {
			type: Sequelize.ENUM('M','F')
		},
		
		designation: {
			type: Sequelize.STRING
		},
		
		phone_number: {
			type: Sequelize.STRING
		},
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return User;
 
}
