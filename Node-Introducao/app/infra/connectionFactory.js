const mysql = require('mysql');

//Funcao Anonima
let connectMYSQL = function() {
  return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '22903936',
        database: 'casadocodigo_nodejs'
    });
}
//Wrapper
module.exports = function() {

  return connectMYSQL;
}
