module.exports = function (sequelize, DataTypes) {
	var contact = sequelize.define("contact", {
		// columns
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
		},
		messageID: {
			type: DataTypes.STRING,
			len: [7, 10],
			primaryKey: true,
		}
	}
		,
		// options
		{
			timestamps: true
		});


	return contact;

};