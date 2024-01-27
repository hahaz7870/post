const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home.njk');
});

router.get('/post', )
module.exports = router;