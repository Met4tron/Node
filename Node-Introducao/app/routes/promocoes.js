module.exports = function(app){
  app.get('/promocoes/form', function(req, res){
    var connection = app.infra.connectionFactory();
    var listaPromocoes = new app.infra.produtosDAO(connection);

    listaPromocoes.lista (function(errs, result){
      res.render('promocoes/form', {lista: result});
    });
  });

  app.post('/promocoes', function(req, res){
    var promocoes = req.body;
  app.get('io').emit('novaPromocao', promocoes);
    res.redirect('promocoes/form');
  })
}
