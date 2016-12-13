module.exports = function (app) {
  app.get('/form_noticia', function(req, res){
    res.render('admin/form_add_noticia',{validacao: {}, noticia: {}});
  });
  app.post('/noticias/salvar', function (req, res) {
    var noticia = req.body;

    req.assert('titulo','Titulo Obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório e deve conter entre 10 e 100 Caracteres').notEmpty();
    req.assert('autor','Autor é Obrigatorio').notEmpty();
    req.assert('data_noticia','Data é Obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia','Noticia é obrigatório').notEmpty();
    
    var errs = req.validationErrors();

    console.log(errs);
    if(errs){
      res.render('admin/form_add_noticia', { validacao : errs, noticia: noticia });
      return; 
    }

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