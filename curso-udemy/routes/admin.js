const express = require('express');

const router = express.Router();

router.get('/product', (req, res, next) => {
    res.send(`
        <form action="/admin/product" method="POST">
            <input type="text" name="title">
            <button type="submit">Enviar</button>
        </form>
   `);
});

router.post('/product', (req, res, next) => {
    console.log('This is always executed');
    res.redirect('/');
});

module.exports = router;
