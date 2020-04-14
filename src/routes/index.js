const express = require('express');
const router = express.Router();

router
.route('/')
.get((requisicao, resposta) => {
    resposta.render('index');
});

module.exports = router;