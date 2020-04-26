const express = require('express');
const router = express.Router();
const Gato = require('../database/gato');

router
.route('/')
.get(async (requisicao, resposta) => {
    let opcoes_de_busca = {};
    if (requisicao.query.nome != null && requisicao.query.nome != '') {
        opcoes_de_busca.nome = new RegExp(requisicao.query.nome, 'i'); // i é um sinalizador para dizer que é indiferente entre maiu    sculas e minusuculas 
    }
    try {
        const gatos = await Gato.find(opcoes_de_busca)
        resposta.render('gatos/index', { 
            gatos: gatos,
            opcoes_de_busca: requisicao.query
        });
    } catch {
        resposta.redirect('/');
    }
})
.post(async (requisicao, resposta) => {
    const gato = new Gato({
        nome: requisicao.body.nome
    });
    try {
        const novo_gato = await gato.save();
        // resposta.redirect(`gato/${novo_gato.id}`)
        resposta.redirect(`gatos`);
    } catch {
        resposta.render('gatos/novo', {
            gato: gato,
            mensagem_de_erro: 'Erro ao registrar um novo gato'
        });
    }
});

// novo gatito
router.get('/novo', (requisicao, resposta) => {
    resposta.render('gatos/novo', { gato: new Gato() });
});

module.exports = router;