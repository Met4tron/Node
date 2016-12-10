module.exports = function(app) {

    app.get('/noticia', function(req, res) {

        var connection = app.config.dbConnection();
        var modelNoticia = new app.app.models.NoticiasDAO(connection);

        modelNoticia.getNoticia(function(err, result){
          if(err) throw err
          res.render('noticias/noticia', {noticia: result});
        })

    });
};
