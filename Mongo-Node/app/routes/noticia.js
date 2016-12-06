module.exports = function(app) {

    app.get('/noticia', function(req, res) {

        var connection = app.config.dbConnection();
        var modelNoticia = app.app.models.noticiasModel();

        modelNoticia.getNoticia(connection, function(err, result){
          if(err) throw err
          res.render('noticias/noticia', {noticia: result});
        })

    });
};
