function ProdutosDAO (connection) {
  this._connection = connection;
}

ProdutosDAO.prototype.lista = function  (callback) {
  this._connection.query('select * from livros', callback);
}
ProdutosDAO.prototype.salvar = function(livro, callback) {
  console.log(livro);
  this._connection.query('insert into livros set ?', livro, callback);
}

module.exports = function () {
  return ProdutosDAO;
}
