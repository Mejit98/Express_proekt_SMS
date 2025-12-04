var express = require('express');
var router = express.Router();
var Scooby = require('../models/scooby-du').Scooby;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с scoobys');
});
/* Страница корпорации тайна */
router.get("/:nick", async function(req, res, next) {
    var scoobies = await Scooby.find({nick: req.params.nick});
    console.log(scoobies)
    if(!scoobies.length) return next(new Error("Нет такого персонажа в мультсериале Корпорация тайна"))
       var scooby = scoobies[0];
       res.render('scoob', {
           title: scooby.title,
           picture: scooby.avatar,
           desc: scooby.desc
       })
});
module.exports = router;
