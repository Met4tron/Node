var express = require('../config/express')
var http = require('supertest')(express);
describe('ProdutosController', function() {
    it('#listagem json', function(done) {

      http.get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
      done();
    });

    it('#cadastro de um novo produto com dados invalidos', function (done) {
          http.post('/produtos')
              .send({titulo:"",descricao:"livro de teste"})
              .expect(400,done())

      });

      it('#cadastro de um novo produto com tudo preenchido', function (done) {
          http.post('/produtos')
              .send({titulo:"novo livro",preco:20.50,descricao:"livro de teste"})
              .expect(302, done())
      });
});
