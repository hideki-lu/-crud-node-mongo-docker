const multer = require('multer');
const sistema_de_arquivos = require('fs');
const caminho = require('path');
const express = require('express');
const router = express.Router();
const BlogPost = require('../database/blogpost');
const Gato = require('../database/gato');
const diretorio_upload = caminho.join('public', BlogPost.capa_imagem_caminho_base);
const tipos_de_imagens = ['image/jpeg','image/png','image/gif'];
const upload = multer({ 
    dest: diretorio_upload,
    extencoes_imagem: (requisicao, arquivo, callback)=> {
        callback(null, tipos_de_imagens.includes(arquivo.mimetype));
    }  
})

router
.route('/')
.get(async (requisicao, resposta) => {
    let query = BlogPost.find();
    if (requisicao.query.titulo != null && requisicao.query.titulo != '') {
        query = query.regex('titulo', new RegExp(requisicao.query.titulo, 'i'));
    } 
    if (requisicao.query.data_publicacao != null && requisicao.query.data_publicacao != '') {
        query = query.lte('data_publicacao', requisicao.query.data_publicacao); // lte (less then equal)
    }
    try { 
        const blog_posts = await query.exec();
        resposta.render('blog_posts/index', {
            blog_posts: blog_posts,
            opcoes_de_busca: requisicao.query
        });
    }
    catch { resposta.redirect('/'); }
})
.post(upload.single('capa_miniatura'), async (requisicao, resposta) => {
    const nome_arquivo_imagem = requisicao.file != null ? requisicao.file.filename : null;
    const blog_post = new BlogPost({    
        titulo: requisicao.body.titulo,
        gato: requisicao.body.gato,
        data_publicacao: new Date(requisicao.body.data_publicacao),
        texto: requisicao.body.texto,
        capa_miniatura_nome:  nome_arquivo_imagem,
    });
    try {
       const nova_postagem = await blog_post.save();
        // resposta.redirect(`blog_posts/${nova_postagem.id}`)
        resposta.redirect(`blog_posts`); 
    } catch {
        if (blog_post.capa_nome_imagem != null) {
            remover_capa_miniatura(blog_post.capa_miniatura_nome );
        }
        renderizar_pagina_nova(resposta, blog_post, true);
    }
});

// novo post do blog
router
.route('/novo')
.get(async (requisicao, resposta) => {
    renderizar_pagina_nova(resposta, new BlogPost());
});

async function renderizar_pagina_nova(resposta, blog_post, houve_erro = false) {
    try {
        const gatos = await Gato.find({});
        const parametros = {
            gatos: gatos,
            blog_post: blog_post
        }
        if (houve_erro) parametros.mensagem_de_erro = 'Erro ao criar publicação';
        resposta.render('blog_posts/novo', parametros);
    } catch {  resposta.redirect('/blog_posts'); }
}

function remover_capa_miniatura (nome_arquivo) {
    sistema_de_arquivos.unlink(caminho.join(diretorio_upload, nome_arquivo), erro => {
        if (erro) console.error(erro);
    });
}

module.exports = router;