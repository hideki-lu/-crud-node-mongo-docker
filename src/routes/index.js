const BlogPost = require('../database/blogpost');
const express = require('express');
const router = express.Router();

router
.route('/')
.get(async (requisicao, resposta) => {
    let blog_posts;
    try {
        blog_posts = await BlogPost.find().sort({ createdAt: 'desc'}).limit(10).exec();
    } catch {
        blog_posts = [];
    }
    resposta.render('index', { blog_posts: blog_posts });
});

module.exports = router;