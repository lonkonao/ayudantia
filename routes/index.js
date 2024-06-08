const express = require('express');
const router = express.Router();

// Definir rutas
router.get('/', (req, res) => {
    res.render('Home');
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

module.exports = router;
