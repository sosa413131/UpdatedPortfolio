var sequelize = new Sequelize("myportfoliopage", "root", "", {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});



// Export connection

module.exports = sequelize;