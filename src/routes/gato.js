const express = require('express');
const router = express.Router();
const gato = require('../database/gato');

router
.route('/')
.get((requisicao, resposta) => {
    resposta.render('gato/index')
})
.post((requisicao, resposta) => {
    resposta.send('criado');
});

// novo gatito
router.get('/novo', (requisicao, resposta) => {
    resposta.render('gato/new', {gato: new Gato});
});

module.exports = router;