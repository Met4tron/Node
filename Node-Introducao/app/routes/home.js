module.exports = function(app) {
    app.get('/', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.produtosDAO(connection);

        produtosDAO.lista(function(errs, result) {
          res.render('home/index', {livros : result});
        });

        connection.end();

    })
}
