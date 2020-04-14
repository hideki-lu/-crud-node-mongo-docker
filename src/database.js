const mongoose = require('mongoose');
const URL_BANCO_DE_DADOS = 'mongodb://mongo/test_crud';

var katoSchema = mongoose.Schema({
    nome: String
});

Katito = exports.Kato = mongoose.model('Kato', katoSchema);

exports.initializeMongo = () => {
    mongoose.connect(URL_BANCO_DE_DADOS, {useNewUrlParser: true});
    console.log('Perae ki to conectanu >:( com ' + DATABASE_CONECTION);
    const bando_de_dados = mongoose.connection;
    banco_de_dados.on('error', erro => console.error(erro));
    banco_de_dados.once('open', () => console.log('conexão estabelecida!'));
}