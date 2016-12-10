module.exports = function (app) {
  app.get('/form_noticia', (req, res) => {
    res.render('admin/form_add_noticia');
  });
  app.post('/noticias/salvar', function (req, res) {
    var noticia = req.body;

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
      res.redirect('/noticias');
    })


    //Conexao
    //Model
    //salvarNoticia

    // Toda requisição do tipo POST = > res.redirect();
  });
};