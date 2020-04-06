const express = require('express');
const banco_de_dados = require('./database');
const body_parser = require ('body-parser');

const app = express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
//app.listen(8000);

app.set('view engine', 'ejs');
// view engine é a ferramenta que será usada para ser feita
// a visão(front) da plicação na qual vai ser utilizada ejs

app.get('/',(requisicao, resultado) => {
    resultado.send('OK');
})