var mysql = require('mysql');
var pool  = mysql.createPool({ 
	host: CONFIG('mysql-host'),
	user: CONFIG('mysql-user'),
	password: CONFIG('mysql-password'),
	database: CONFIG('mysql-database')
});

// override the framework prototype
F.database = function(callback) {
	return pool.getConnection(callback);
};
