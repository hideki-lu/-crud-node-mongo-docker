const express = require('express');
const banco_de_dados = require('./database');
const body_parser = require ('body-parser');
const path = require('path');
const express_layout = require('express-ejs-layouts');
const app = express();

// rotas os modelos do app
const rota_principal = require('./routes/index');
const rota_gato = require('./routes/gato');

// view engine é a ferramenta que será usada para ser feita
// a visão(front) da aplicação na qual vai ser utilizada ejs
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
app.use(express_layout);

app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, '/view'));
app.set('view engine', 'ejs');

// rotas da aplicação
app.use('/', rota_principal);
app.use('/gato', rota_gato);

app.listen(3000, () => {
    console.log('escutando na porta 3000, aberto para requisições');
});


