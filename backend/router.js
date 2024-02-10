const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('home.njk');
});

router.get('/posts', function (req, res) {
    res.render('posts.njk', {
        posts: [
            {title: 'hello', author: 'User1', body: 'Lorem Ipsum1'},
            {title: 'hi', author: 'User2', body: 'Lorem Ipsum2'},
            {title: 'hel', author: 'User3', body: 'Lorem Ipsum3'},
            {title: 'hello', author: 'User4', body: 'Lorem Ipsum4'}
            
        ]
            
    });
});

router.get('/', function (req, res) {
    res.render('home.njk', {
        posts: [
            {title: 'hello', author: 'User1', body: 'Lorem Ipsum1'},
            {title: 'hi', author: 'User2', body: 'Lorem Ipsum2'},
            {title: 'hel', author: 'User3', body: 'Lorem Ipsum3'},
            {title: 'hello', author: 'User4', body: 'Lorem Ipsum4'}
            
        ]
            
    });
});

router.get('/projects', function (req, res) {
    res.render('projects.njk');
});

module.exports = router;
