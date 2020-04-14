const mongoose = require('mongoose');

const gatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Gato', gatoSchema);