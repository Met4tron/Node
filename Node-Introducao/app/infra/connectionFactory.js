const mysql = require('mysql');

//Funcao Anonima
let connectMYSQL = () => {
  return  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'produtos_node'
    });
}
//Wrapper
module.exports = () => {

  return connectMYSQL;
}
