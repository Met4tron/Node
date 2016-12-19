module.exports = function(app) {
    app.get('/produtos', function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.produtosDAO(connection);

        produtosBanco.lista(function(erros, result) {

          res.format({
              html: function() {
                  res.render('produtos/lista', {
                      lista: result
                  });
              },
              json: function() {
                  res.json(result)
              }
          });
        });
        connection.end();
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form', {errosValidacao: {}, produto: {}});
    });

    app.post('/produtos/salvar', function(req, res) {

        var connection = app.infra.connectionFactory();
        var insertBank = new app.infra.produtosDAO(connection);

        var dadosForm = req.body;

          req.assert('titulo', 'Titulo é obrigatório').notEmpty();
          req.assert('preco', 'Preço é obrigatório').notEmpty();
          req.assert('preco','Preço só deve ser números').isFloat();
          req.assert('descricao', 'Descrição é obrigatória').notEmpty();

          var errs = req.validationErrors();

          if (errs) {
            res.format({
                html: function(){
                    res.status(400).render("produtos/form",{errosValidacao:errs ,produto:dadosForm});
                },
                json: function(){
                    res.status(400).send(errors);
                }
            });
            return;
          }

        insertBank.salvar(dadosForm, function(erros, result) {
            res.redirect('/produtos');
        });

    });

    /*  app.get('produtos/remove', function(){
        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;

        var produto = produtosBanco.carrega(connection, id, callback);
        if (produtos) {
          produtosBanco.remove(connection, produto, callback);
        }
      });*/
}
