module.exports = function(app){
    app.get('/produtos',function(req,res){

        var connection = app.infra.connectionFactory();
        var produtosBanco =  new app.infra.ProdutosDAO(connection);

      produtosBanco.lista(function(erros,result){

          res.render('produtos/lista' , {lista:result});

       });
        connection.end();
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
