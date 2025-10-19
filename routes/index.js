var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Страница Фреда */
router.get('/fred', function(req, res, next) {
    res.render('scoob', {
        title: "Фред",
        picture: "images/fred.png",
        desc: "Лидер команды. Смелый, решительный и любит разрабатывать планы по поимке злодеев. Обычно он за рулём фургона «Тайна-машина» и часто берёт на себя руководство расследованиями."
    });
});
/* Страница Скуби */
router.get('/scooby-dy', function(req, res, next) {
    res.render('scoob', {
        title: "Скуби-Ду",
        picture: "images/scooby-dy.png",
        desc: "Добродушный, но очень трусливый пёс. Несмотря на страх, всегда помогает друзьям. Любит еду и особенно обожает «Скуби-снеки»."
    });
});

/* Страница Шэгги */
router.get('/sheki', function(req, res, next) {
    res.render('scoob', {
        title: "Шэгги",
        picture: "images/sheki.jpeg",
        desc: "Лучший друг Скуби-Ду. Весёлый и немного трусоватый парень, который постоянно думает о еде. Часто оказывается в забавных ситуациях вместе со Скуби."
    });
});

/* Страница Велмы */
router.get('/velma', function(req, res, next) {
    res.render('scoob', {
        title: "Велма",
        picture: "images/velma.png",
        desc: "Самая умная в команде. Логичная, рассудительная и наблюдательная. Благодаря ей команда часто раскрывает все тайны."
    });
});

/* Страница Дафны */
router.get('/dafna', function(req, res, next) {
    res.render('scoob', {
        title: "Дафна",
        picture: "images/dafna.png",
        desc: "Стильная и энергичная участница команды. Всегда готова помочь друзьям и не боится трудностей. Отличается добротой и находчивостью."
    });
});
module.exports = router;
