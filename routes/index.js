var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Фреда*/
router.get('/fred', function(req, res, next) {
    res.send("<h1>Страница Фреда</h1>")
});
/* Страница Давны*/
router.get('/dafna', function(req, res, next) {
    res.send("<h1>Страница Давны</h1>")
});

/* Страница Велмы */
router.get('/velma', function(req, res, next) {
    res.send("<h1>Страница Велмы</h1>")
});
/* Страница Шегги */
router.get('/sheki', function(req, res, next) {
    res.send("<h1>Страница Шегги</h1>")
});

/* Страница Скуби-ду */
router.get('/scooby-dy', function(req, res, next) {
    res.send("<h1>Страница Скуби-ду</h1>")
});


module.exports = router;
