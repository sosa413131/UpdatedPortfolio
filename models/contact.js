module.exports = function(sequelize, DataTypes) {
	var contact = sequelize.define("contact", {
		name:{
			allowNull: false,
			type: DataTypes. TEXT,
		},
        email:{
			allowNull: false,
			type: DataTypes.STRING,
			primaryKey: true
		},
		message:{
			allowNull: false,
			type: DataTypes. TEXT,
		}
	});


	return contact;

};