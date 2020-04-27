const mongoose = require('mongoose');
const caminho = require('path');
const capa_imagem_caminho_base = 'uploads/capas_blog';

const blogPostSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    texto: {
        type: String,
        required: true
    },
    data_publicacao: {
        type: Date,
        required: true,
        default: Date.now
    },
    capa_miniatura_nome: {
        type: String,
        required: true
    },
    gato: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Gato'
    }
});

blogPostSchema.virtual('capa_caminho_imagem').get(function() {
    if(this.capa_miniatura_nome != null ){
        return caminho.join('/', capa_imagem_caminho_base, this.capa_miniatura_nome);
    }
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
module.exports.capa_imagem_caminho_base = capa_imagem_caminho_base;