var express = require('express');
var router = express.Router();
var createError = require('http-errors');
var Scooby = require('../models/scooby-du').Scooby;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с scoobies');
});

/* Страница корпорации тайна */
router.get("/:nick", checkAuth, async function(req, res, next) {
    var scoobies = await Scooby.find({nick: req.params.nick});
    console.log(scoobies)
    if(!scoobies.length) return next(new Error("Нет такого персонажа в мультсериале Корпорация тайна"))
       var scoob = scoobies[0];
       res.render('scoob', {
           title: scoob.title,
           picture: scoob.avatar,
           desc: scoob.desc
       })
});
module.exports = router;
