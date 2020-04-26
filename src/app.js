const express = require('express');
const body_parser = require ('body-parser');
const path = require('path');
const express_layout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();


// rotas os modelos do app ou controladoras do MVC
const rota_principal = require('./routes/index');
const rota_gato = require('./routes/gatos');

// view engine é a ferramenta que será usada para ser feita
// a visão(front) da aplicação na qual vai ser utilizada ejs
app.use(body_parser.json());
app.use(body_parser.urlencoded({ limit: '10mb', extended: false }));

app.set('views', path.join(__dirname, '/view'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express_layout);

// abrindo conexão com banco de dados mongo
mongoose.connect('mongodb://mongo:27017/teste_crud', { useNewUrlParser : true, useUnifiedTopology: true })
const banco_de_dados = mongoose.connection;
banco_de_dados.on('error', erro => console.error(erro));
banco_de_dados.once('open', () => console.log('conexão com mongoose estabelecida'));

// rotas da aplicação
app.use('/', rota_principal);
app.use('/gatos', rota_gato);


app.listen(3000, () => {
    console.log('escutando na porta 3000, aberto para requisições');
});


