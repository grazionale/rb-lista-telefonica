
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
  
app.get('/operadoras', function(req, res) {
  var dados = [
    { nome: "Oi", codigo: "11", categoria: "Celular", preco: 1 },
    { nome: "Tim", codigo: "41", categoria: "Celular", preco: 2 },
    { nome: "Claro", codigo: "25", categoria: "Fixo", preco: 3 }
  ];
  res.send(JSON.stringify(dados));
});


app.get('/contatos', function(req, res) {
    var dados = [
        { nome: "Francini", telefone: "9999-9999", data: new Date(), cor: "black" },
        { nome: "Gabriel", telefone: "9999-8888", data: new Date(), cor: "yellow" },
        { nome: "Nice", telefone: "9999-7777", data: new Date(), cor: "purple" }
    ];
    res.send(JSON.stringify(dados));
});

app.listen(8000, function() {
  console.log('Servidor rodando na porta 8000.');
});