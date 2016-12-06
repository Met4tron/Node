module.exports = (app) => {
  app.get('/form_noticia', (req, res) =>{
    res.render('admin/form_add_noticia');
  })
};
