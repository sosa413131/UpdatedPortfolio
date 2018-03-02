module.exports = function (sequelize, DataTypes) {
	var contact = sequelize.define("contact", {
		// id: {
		// 	autoincrement: true,
		// 	primaryKey: true,
		// 	type: DataTypes.INTEGER
		// },
		name: {
			allowNull: false,
			type: DataTypes.TEXT,
		},
		email: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		message: {
			allowNull: false,
			type: DataTypes.TEXT,
		}
	});


	return contact;

};