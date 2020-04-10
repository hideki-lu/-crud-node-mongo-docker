const express = require('express');
const banco_de_dados = require('./database');
const body_parser = require ('body-parser');
const path = require('path');

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
app.listen(3000, () => {
    console.log('escutando na porta 3000, aberto para requisições');
});

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
// view engine é a ferramenta que será usada para ser feita
// a visão(front) da plicação na qual vai ser utilizada ejs

app.get('/', (requisicao, resultado) => {
    resultado.render('index');
})