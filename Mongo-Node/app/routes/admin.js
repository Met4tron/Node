module.exports = function(application) {
    application.get('/form_noticia', function(req, res) {
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);
    });
    application.post('/noticias/salvar', function(req, res) {

        application.app.controllers.admin.noticias_salvar(application, req, res);
        //Conexao
        //Model
        //salvarNoticia

        // Toda requisição do tipo POST = > res.redirect();
    });
};
