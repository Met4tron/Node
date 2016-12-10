const mysql = require('mysql');
var connect = function() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '22903936',
        database: 'portal_noticia'
    });
}
module.exports = function() {
    return connect;
}
