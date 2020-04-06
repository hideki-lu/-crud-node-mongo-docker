const mongoose = require('mongoose');
const DATABASE_CONECTION = 'mongodb://mongo/test_crud';

var katoSchema = mongoose.Schema({
    nome: String
});

Katito = exports.Kato = mongoose.model('Kato', katoSchema);

exports.initializeMongo = () => {
    mongoose.connect(DATABASE_CONNECTION);
    console.log('Perae ki to conectanu >:( com ' + DATABASE_CONECTION);
}