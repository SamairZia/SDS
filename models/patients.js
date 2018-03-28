/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('patients', {
    regno: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    parentname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    houseaddress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    workaddress: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    datereg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    sex: {
      type: DataTypes.ENUM('F','M'),
      allowNull: true
    },
    maritalstatus: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    occupation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    reference: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    phonenumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    tableName: 'patients'
  });
};
