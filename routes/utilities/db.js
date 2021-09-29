var mysql      = require('mysql');
const connection = mysql.createConnection({
  host     :  process.env.DB_HOST,
  user     :  process.env.DB_USER,
  password :  process.env.DB_PSWD,
  database:   process.env.DB_DATABASE
});

connection.connect(function(err) {
    if (err) 
    {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected');
});

module.exports = connection;
